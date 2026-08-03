const fs = require('fs');
const path = require('path');

const srcDir = path.resolve('../stitch_web_development_project');
const outDir = path.resolve('./src/app');

const pages = [
    { dir: 'kreonex_media_home_pro_edition', route: '' },
    { dir: 'kreonex_media_about', route: 'about' },
    { dir: 'kreonex_media_contact', route: 'contact' },
    { dir: 'kreonex_media_how_we_work', route: 'how-we-work' },
    { dir: 'kreonex_media_services_pro_edition', route: 'services' },
    { dir: 'kreonex_media_work', route: 'work' },
    { dir: 'kreonex_precision', route: 'precision' },
    { dir: 'kreonex_precision1', route: 'precision1' }
];

function htmlToJsx(html) {
    let jsx = html.replace(/class=/g, 'className=');
    jsx = jsx.replace(/for=/g, 'htmlFor=');
    jsx = jsx.replace(/<img([^>]+?)(?<!\/)>/g, '<img$1 />');
    jsx = jsx.replace(/<br([^>]*?)(?<!\/)>/g, '<br$1 />');
    jsx = jsx.replace(/<hr([^>]*?)(?<!\/)>/g, '<hr$1 />');
    jsx = jsx.replace(/<input([^>]+?)(?<!\/)>/g, '<input$1 />');
    jsx = jsx.replace(/style="([^"]*)"/g, (match, styleStr) => {
        const styles = styleStr.split(';').filter(s => s.trim());
        const styleObj = {};
        styles.forEach(s => {
            let [k, v] = s.split(':');
            if(k && v) {
                k = k.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
                styleObj[k] = v.trim();
            }
        });
        return `style={{${Object.entries(styleObj).map(([k,v]) => `${k}: "${v}"`).join(', ')}}}`;
    });
    jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');
    jsx = jsx.replace(/stroke-width/g, 'strokeWidth');
    jsx = jsx.replace(/stroke-linecap/g, 'strokeLinecap');
    jsx = jsx.replace(/stroke-linejoin/g, 'strokeLinejoin');
    jsx = jsx.replace(/fill-rule/g, 'fillRule');
    jsx = jsx.replace(/clip-rule/g, 'clipRule');
    jsx = jsx.replace(/xmlns:xlink/g, 'xmlnsXlink');
    jsx = jsx.replace(/xlink:href/g, 'xlinkHref');
    jsx = jsx.replace(/viewbox/gi, 'viewBox');
    
    // Check for other unclosed tags like path
    jsx = jsx.replace(/<path([^>]+?)(?<!\/)>/g, '<path$1 />');
    jsx = jsx.replace(/<circle([^>]+?)(?<!\/)>/g, '<circle$1 />');
    jsx = jsx.replace(/<rect([^>]+?)(?<!\/)>/g, '<rect$1 />');
    jsx = jsx.replace(/<line([^>]+?)(?<!\/)>/g, '<line$1 />');
    jsx = jsx.replace(/<polygon([^>]+?)(?<!\/)>/g, '<polygon$1 />');
    jsx = jsx.replace(/<polyline([^>]+?)(?<!\/)>/g, '<polyline$1 />');
    
    return jsx;
}

pages.forEach(page => {
    const htmlPath = path.join(srcDir, page.dir, 'code.html');
    if (!fs.existsSync(htmlPath)) {
        console.log("Not found: " + htmlPath);
        return;
    }
    
    let html = fs.readFileSync(htmlPath, 'utf8');
    
    let bodyContent = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyContent && bodyContent[1]) {
        let content = bodyContent[1];
        content = content.replace(/<script[\s\S]*?<\/script>/g, '');
        
        let jsxContent = htmlToJsx(content);
        
        let routeDir = path.join(outDir, page.route);
        if (!fs.existsSync(routeDir)) {
            fs.mkdirSync(routeDir, { recursive: true });
        }
        
        let pageCode = `export default function Page() {\n  return (\n    <>\n${jsxContent}\n    </>\n  );\n}`;
        fs.writeFileSync(path.join(routeDir, 'page.js'), pageCode);
        console.log("Generated page for " + (page.route || 'home'));
    } else {
        console.log("No body found for " + page.dir);
    }
});
