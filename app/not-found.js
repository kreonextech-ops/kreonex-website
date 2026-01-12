// This line bypasses the Turbopack Proxy error by disabling static prerendering
export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>404 - Page Not Found</h1>
    </div>
  );
}