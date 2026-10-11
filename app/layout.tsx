import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kenya Connect - Location-Based Dating',
  description: 'Connect with people near you in Kenya. Find matches by county, interests, and more.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container nav">
            <h1>Kenya Connect 🇰🇪</h1>
            <nav>
              <a href="/">Home</a>
              <a href="/matches">Nearby</a>
              <a href="/profile">Profile</a>
            </nav>
          </div>
        </header>
        <main className="container" style={{ paddingTop: '2rem' }}>
          {children}
        </main>
        <footer style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
          <p>© 2026 Kenya Connect — Made for Kenyans, by Kenyans</p>
        </footer>
      </body>
    </html>
  );
}
