'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

function getCardPosition(index, activeIndex, total) {
  const offset = (index - activeIndex + total) % total;

  if (offset === 0) return 'is-active';
  if (offset === 1) return 'is-next';
  if (offset === total - 1) return 'is-prev';
  return 'is-hidden';
}

export default function DestinationShowcase({ destinations, intro }) {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  const progressWidth = `${100 / destinations.length}%`;
  const progressLeft = `${activeIndex * (100 / destinations.length)}%`;

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.26 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || paused) return undefined;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % destinations.length);
    }, 3800);

    return () => window.clearInterval(interval);
  }, [destinations.length, paused, visible]);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + destinations.length) % destinations.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % destinations.length);
  };

  return (
    <section
      className={`destinations-section ${visible ? 'is-visible' : ''}`}
      id="destinations"
      ref={sectionRef}
    >
      <div className="container destination-layout">
        <div className="destination-intro">
          <p className="eyebrow destination-line" style={{ '--line-index': 0 }}>
            {intro.eyebrow}
          </p>
          <h2 className="destination-line" style={{ '--line-index': 1 }}>
            {intro.title}
          </h2>
          <p className="destination-line" style={{ '--line-index': 2 }}>
            {intro.text}
          </p>
          <a className="button button-primary compact destination-line" style={{ '--line-index': 3 }} href="#contact">
            {intro.button}
          </a>
        </div>

        <div
          className="destination-gallery"
          aria-label={intro.galleryLabel}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div className="destination-stage">
            {destinations.map(({ title, text, image }, index) => (
              <article
                className={`destination-panel ${getCardPosition(index, activeIndex, destinations.length)}`}
                key={`${title}-${image}`}
                aria-hidden={index !== activeIndex}
              >
                <Image src={image} alt={title} fill sizes="(max-width: 900px) 82vw, 460px" />
                <div className="destination-panel-copy">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="destination-controls">
            <button type="button" onClick={showPrevious} aria-label={intro.previousLabel}>
              <ArrowLeft aria-hidden="true" />
            </button>
            <div className="destination-progress" aria-hidden="true">
              <span style={{ width: progressWidth, left: progressLeft }} />
            </div>
            <button type="button" onClick={showNext} aria-label={intro.nextLabel}>
              <ArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
