import './globals.css';

export const metadata = {
  title: 'All VIP Services | Premium Las Vegas Transportation',
  description:
    'Premium private transportation and concierge services for Grand Canyon, Hoover Dam, Seven Magic Mountain, and Las Vegas experiences.',
  openGraph: {
    title: 'All VIP Services',
    description: 'Premium travel, personalized for you.',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
