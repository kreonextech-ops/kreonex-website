const { S3Client } = require('@aws-sdk/client-s3');
const { Upload } = require('@aws-sdk/lib-storage');
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

const accountId = '06c0bed1fd7b4a7923d9ab4d899da5e9';
const accessKeyId = '43ac86b01892cdbd911749b9b0656ff7';
const secretAccessKey = '34bb983b21c45fbb9957b2424b8bbb00fc601e4b71a334ea3a5ca61e3ba5cad2';
const bucketName = 'kreonexmedia';

const s3Client = new S3Client({
  region: 'auto',
  endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  },
});

async function uploadFile(filePath, key) {
  const fileStream = fs.createReadStream(filePath);
  const contentType = mime.lookup(filePath) || 'application/octet-stream';
  
  console.log(`Uploading ${filePath} to ${key} (${contentType})...`);
  
  try {
    const parallelUploads3 = new Upload({
      client: s3Client,
      params: {
        Bucket: bucketName,
        Key: key,
        Body: fileStream,
        ContentType: contentType,
      },
      queueSize: 4, 
      partSize: 1024 * 1024 * 5,
      leavePartsOnError: false, 
    });

    await parallelUploads3.done();
    console.log(`Successfully uploaded ${key}`);
  } catch (err) {
    console.error(`Error uploading ${key}:`, err);
  }
}

async function uploadDirectory(directoryPath, basePath = '') {
  const files = fs.readdirSync(directoryPath);
  
  for (const file of files) {
    const fullPath = path.join(directoryPath, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await uploadDirectory(fullPath, path.join(basePath, file));
    } else {
      const key = path.join(basePath, file).replace(/\\/g, '/'); // R2 uses forward slashes
      await uploadFile(fullPath, key);
    }
  }
}

async function run() {
  const publicDir = path.join(__dirname, 'public');
  
  if (fs.existsSync(path.join(publicDir, 'images'))) {
    await uploadDirectory(path.join(publicDir, 'images'), 'images');
  }
  
  if (fs.existsSync(path.join(publicDir, 'media'))) {
    await uploadDirectory(path.join(publicDir, 'media'), 'media');
  }
}

run();
