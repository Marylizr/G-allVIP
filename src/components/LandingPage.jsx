import {
  ArrowUpRight,
  BedDouble,
  Clock3,
  Headphones,
  Home,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  UserRound
} from 'lucide-react';
import Image from 'next/image';
import DestinationShowcase from '@/components/DestinationShowcase';
import DocumentLanguage from '@/components/DocumentLanguage';
import Header from '@/components/Header';
import ServiceCards from '@/components/ServiceCards';
import logoImage from '@/assets/logo.png';
import { sharedImages } from '@/data/siteContent';

const phone = '+1 (725) 244-8525';
const reasonIcons = [ShieldCheck, Star, Clock3, Headphones];
const trustIcons = [ShieldCheck, UserRound, Clock3, Sparkles];

function buildWhatsappUrl(message) {
  return `https://wa.me/17252448525?text=${message}`;
}

function CtaButtons({ content, whatsappUrl }) {
  return (
    <div className="cta-row">
      <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
        <Phone size={20} aria-hidden="true" />
        <span>
          {phone}
          <small>{content.labels.sms}</small>
        </span>
      </a>
      <a className="button button-secondary" href="#contact">
        {content.labels.requestService}
      </a>
    </div>
  );
}

function AccommodationSection({ accommodation, whatsappUrl }) {
  const [mainImage, ...supportImages] = accommodation.images;

  return (
    <section className="accommodation-section section-light" id="accommodation">
      <div className="container accommodation-layout">
        <div className="accommodation-gallery" aria-label={accommodation.title}>
          <div className="accommodation-main-photo">
            <Image
              src={mainImage}
              alt={accommodation.title}
              fill
              sizes="(max-width: 900px) 100vw, 620px"
            />
          </div>
          <div className="accommodation-photo-stack">
            {supportImages.slice(0, 4).map((image, index) => (
              <div className="accommodation-thumb" key={image}>
                <Image
                  src={image}
                  alt={`${accommodation.title} ${index + 2}`}
                  fill
                  sizes="(max-width: 900px) 45vw, 170px"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="accommodation-copy">
          <p className="eyebrow">{accommodation.eyebrow}</p>
          <h2>{accommodation.title}</h2>
          <p>{accommodation.text}</p>
          <div className="accommodation-features">
            {accommodation.features.map((feature, index) => {
              const Icon = [Home, BedDouble, MapPin][index] || ShieldCheck;

              return (
                <span key={feature}>
                  <Icon aria-hidden="true" />
                  {feature}
                </span>
              );
            })}
          </div>
          <p className="accommodation-note">{accommodation.note}</p>
          <div className="accommodation-actions">
            <a className="button button-primary compact" href={accommodation.link} target="_blank" rel="noreferrer">
              {accommodation.button}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-dark compact" href={whatsappUrl} target="_blank" rel="noreferrer">
              <Phone size={18} aria-hidden="true" />
              {phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function LandingPage({ content }) {
  const whatsappUrl = buildWhatsappUrl(content.labels.phoneMessage);

  return (
    <>
      <DocumentLanguage locale={content.locale} />
      <Header
        phone={phone}
        whatsappUrl={whatsappUrl}
        navItems={content.nav}
        requestLabel={content.labels.requestService}
        smsLabel={content.labels.sms}
        currentLocale={content.locale}
        languageLinks={content.languageLinks}
      />
      <main>
        <section className="hero" id="home">
          <Image
            className="hero-image"
            src={sharedImages.hero}
            alt="Luxury Las Vegas travel route"
            priority
            fill
            sizes="100vw"
          />
          <div className="hero-overlay" />
          <div className="container hero-content">
            <div className="hero-copy">
              <p className="eyebrow">{content.hero.eyebrow}</p>
              <h1 className="hero-title" data-locale={content.locale} aria-label={content.hero.aria}>
                {content.hero.title.map((line) => (
                  <span key={line} style={{ '--characters': line.length }}>
                    {line}
                  </span>
                ))}
              </h1>
              <p className="hero-text">{content.hero.text}</p>
              <p className="promo-note">{content.hero.promo}</p>
              <CtaButtons content={content} whatsappUrl={whatsappUrl} />
            </div>
          </div>
          <div className="trust-strip">
            <div className="container trust-grid">
              {[...content.trust, ...content.trust].map(([title, text], index) => {
                const Icon = trustIcons[index % trustIcons.length] || ShieldCheck;

                return (
                  <article key={`${title}-${index}`} aria-hidden={index >= content.trust.length}>
                    <Icon aria-hidden="true" />
                    <span>{title}</span>
                    <small>{text}</small>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="services-section section-light" id="services">
          <div className="container services-layout">
            <div className="section-intro">
              <p className="eyebrow">{content.servicesIntro.eyebrow}</p>
              <h2>{content.servicesIntro.title}</h2>
              <p>{content.servicesIntro.text}</p>
              <a className="button button-primary compact" href="#destinations">
                {content.servicesIntro.button}
              </a>
            </div>
            <ServiceCards services={content.services} />
          </div>
        </section>

        <DestinationShowcase destinations={content.destinations} intro={content.destinationsIntro} />

        <AccommodationSection accommodation={content.accommodation} whatsappUrl={whatsappUrl} />

        <section className="why-section section-light" id="about">
          <div className="container why-layout">
            <div className="section-intro">
              <p className="eyebrow">{content.why.eyebrow}</p>
              <h2>{content.why.title}</h2>
            </div>
            <div className="reason-grid">
              {content.why.reasons.map(([title, text], index) => {
                const Icon = reasonIcons[index] || ShieldCheck;

                return (
                  <article className="reason-card" key={title}>
                    <Icon aria-hidden="true" />
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="contact-band" id="contact">
          <div className="container contact-layout">
            <div>
              <h2>{content.contact.title}</h2>
              <p>{content.contact.text}</p>
            </div>
            <CtaButtons content={content} whatsappUrl={whatsappUrl} />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#home" aria-label="All VIP Services home">
              <span className="brand-mark">
                <Image src={logoImage} alt="" width={42} height={46} />
              </span>
              <span>
                all VIP
                <small>services</small>
              </span>
            </a>
            <p>{content.footer.description}</p>
            <div className="socials" aria-label="Social links">
              <a href="https://facebook.com" aria-label="Facebook">f</a>
              <a href="https://instagram.com" aria-label="Instagram">ig</a>
              <a href="https://tripadvisor.com" aria-label="Tripadvisor">ta</a>
            </div>
          </div>
          <nav aria-label={content.footer.quickLinks}>
            <h3>{content.footer.quickLinks}</h3>
            {content.nav.map(([label, href]) => (
              <a href={href} key={label}>
                {label}
              </a>
            ))}
          </nav>
          <nav aria-label={content.footer.servicesTitle}>
            <h3>{content.footer.servicesTitle}</h3>
            {content.services.map(({ title }) => (
              <a href="#services" key={title}>
                {title}
              </a>
            ))}
          </nav>
          <nav aria-label={content.footer.destinationsTitle}>
            <h3>{content.footer.destinationsTitle}</h3>
            {content.destinations.map(({ title }) => (
              <a href="#destinations" key={title}>
                {title}
              </a>
            ))}
          </nav>
          <div className="footer-contact">
            <h3>{content.footer.contactTitle}</h3>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <Phone size={18} aria-hidden="true" />
              <span>
                {phone}
                <small>{content.labels.sms}</small>
              </span>
            </a>
            <p>
              <Headphones size={18} aria-hidden="true" />
              {content.footer.smsReservations}
            </p>
            <p>
              <MapPin size={18} aria-hidden="true" />
              {content.footer.location}
            </p>
          </div>
        </div>
        <div className="container footer-disclaimer">
          <p>{content.footer.disclaimer}</p>
        </div>
        <div className="container footer-bottom">
          <p>{content.footer.copyright}</p>
          <div>
            <a href="https://pixeltrendstudio.com/en" target="_blank" rel="noreferrer">
              Powered by pixelTrend Studio LLC
            </a>
            <a href="#home">{content.footer.privacy}</a>
            <a href="#home">{content.footer.terms}</a>
          </div>
        </div>
      </footer>
    </>
  );
}
