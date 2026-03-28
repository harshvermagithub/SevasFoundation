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
  const [activeBanners, setActiveBanners] = useState<string[]>([]);

  useEffect(() => {
    fetch('/api/admin')
      .then(res => res.json())
      .then(data => {
        if (data.banners && data.banners.length > 0) {
          setActiveBanners(data.banners.map((img: string) => img.startsWith('http') ? img : `/media/banner/${img}`));
        } else {
          setActiveBanners(bannerImages);
        }
      })
      .catch(() => setActiveBanners(bannerImages));
  }, []);

  useEffect(() => {
    if (activeBanners.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeBanners.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [activeBanners]);

  if (activeBanners.length === 0) return null;

  return (
    <div 
      className="banner-container"
      style={{ 
        position: 'relative', 
        width: '100%', 
        height: 'clamp(230px, 46vw, 420px)', // Increased vertical size by ~15% properly without impacting width

        backgroundColor: '#f5f5f5',
        borderRadius: '24px',
        overflow: 'hidden',
        marginBottom: '4rem',
        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
        border: '4px solid white',
        zIndex: 1
      }}
    >
      {activeBanners.map((src, index) => (
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
              objectFit: 'cover',
              objectPosition: 'top center'
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
        {activeBanners.map((_, index) => (
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
