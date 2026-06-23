import LandingPage from '@/components/LandingPage';
import { siteContent } from '@/data/siteContent';

export const metadata = {
  title: 'All VIP Services | Transporte premium en Las Vegas',
  description:
    'Transporte privado premium y servicios concierge hacia Grand Canyon, Hoover Dam, Seven Magic Mountain y experiencias en Las Vegas.',
  alternates: {
    languages: {
      en: '/',
      es: '/es'
    }
  }
};

export default function SpanishHomePage() {
  return <LandingPage content={siteContent.es} />;
}
