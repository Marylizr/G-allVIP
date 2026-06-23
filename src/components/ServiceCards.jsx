'use client';

import { CalendarDays, Car, MapPin, UserRound } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const serviceIcons = [Car, MapPin, UserRound, CalendarDays];

export default function ServiceCards({ services }) {
  const gridRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.24 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`service-cards ${visible ? 'is-visible' : ''}`} ref={gridRef}>
      {services.map(({ title, text }, index) => {
        const Icon = serviceIcons[index] || Car;

        return (
          <article className="service-card" key={title} style={{ '--card-index': index }}>
            <div className="icon-bubble">
              <Icon aria-hidden="true" />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        );
      })}
    </div>
  );
}
