import LandingPage from '@/components/LandingPage';
import { siteContent } from '@/data/siteContent';

export const metadata = {
  title: 'All VIP Services | Premium Las Vegas Transportation',
  description:
    'Premium private transportation and concierge services for Grand Canyon, Hoover Dam, Seven Magic Mountain, and Las Vegas experiences.',
  alternates: {
    languages: {
      en: '/',
      es: '/es'
    }
  }
};

export default function HomePage() {
  return <LandingPage content={siteContent.en} />;
}
