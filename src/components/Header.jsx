'use client';

import { Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import logoImage from '@/assets/logo.png';

export default function Header({
  phone,
  whatsappUrl,
  navItems,
  requestLabel,
  smsLabel,
  currentLocale,
  languageLinks
}) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="All VIP Services home">
          <span className="brand-mark">
            <Image src={logoImage} alt="" width={42} height={46} priority />
          </span>
          <span>
            all VIP
            <small>services</small>
          </span>
        </a>

        <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a href={href} key={label} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="phone-link" href={whatsappUrl} target="_blank" rel="noreferrer">
            <Phone size={18} aria-hidden="true" />
            <span>
              {phone}
              <small>{smsLabel}</small>
            </span>
          </a>
          <a className="request-link" href="#contact">
            {requestLabel}
          </a>
          <div className="language-switch" aria-label="Language selector">
            <a className={currentLocale === 'en' ? 'is-active' : ''} href={languageLinks.en}>
              EN
            </a>
            <a className={currentLocale === 'es' ? 'is-active' : ''} href={languageLinks.es}>
              ES
            </a>
          </div>
          <button
            className="menu-button"
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
