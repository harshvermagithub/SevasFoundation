'use client';

import { useState, useEffect } from 'react';

const bannerImages = [
  "/media/banner/banner1.jpg",
  "/media/banner/banner2.jpg",
  "/media/banner/banner3.jpg",
  "/media/banner/banner4.jpg",
  "/media/banner/banner5.jpg",
  "/media/banner/banner6.jpg"
];

export default function BannerSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="banner-container"
      style={{ 
        position: 'relative', 
        width: '100%', 
        height: 'clamp(160px, 32vw, 320px)', // Reduced height by 20%
        backgroundColor: '#f5f5f5',
        borderRadius: '24px',
        overflow: 'hidden',
        marginBottom: '4rem',
        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
        border: '4px solid white',
        zIndex: 1
      }}
    >
      {bannerImages.map((src, index) => (
        <div
          key={src}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: index === currentIndex ? 1 : 0
          }}
        >
          <img
            src={src}
            alt={`Banner ${index + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      ))}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px',
        zIndex: 2
      }}>
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: index === currentIndex ? 'var(--primary, #0070f3)' : 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
          />
        ))}
      </div>
    </div>
  );
}
