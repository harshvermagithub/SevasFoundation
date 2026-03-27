"use client";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState('gallery');
  const [db, setDb] = useState<{ gallery: string[], videos: string[], events: any[] }>({ gallery: [], videos: [], events: [] });
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetch('/api/admin')
      .then(res => res.json())
      .then(data => setDb(data));
  }, []);

  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImageIndex]);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % db.gallery.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + db.gallery.length) % db.gallery.length);
    }
  };

  const tabs = [
    { id: 'gallery', label: 'Images Gallery' },
    { id: 'videos', label: 'Videos' },
    { id: 'social', label: 'Social Media' },
    { id: 'events', label: 'Events' }
  ];

  return (
    <div className="page-content" style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <div className="container" style={{ padding: '4rem 2rem' }}>
        <h1 className="section-title">Media & <span className="glowing-text">Gallery</span></h1>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={activeTab === tab.id ? 'btn-primary' : 'btn-outline'}
              style={{ border: activeTab === tab.id ? 'none' : '1px solid var(--glass-border)', padding: '0.75rem 2rem', borderRadius: '2rem', cursor: 'pointer', fontWeight: 600 }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="glass" style={{ padding: '3rem', minHeight: '400px', background: 'var(--glass-bg)' }}>
          {activeTab === 'gallery' && (
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ color: 'var(--primary)', marginBottom: '2rem' }}>Our Work in Action</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                {db.gallery.map((img, i) => (
                  <div 
                    key={`gallery-img-${img}-${i}`} 
                    onClick={() => setSelectedImageIndex(i)}
                    style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--glass-border)', height: '250px', background: '#ccc', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', cursor: 'pointer', transition: 'transform 0.3s' }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <img src={img.startsWith('http') ? img : `/media/Clients/${img}`} style={{width: '100%', height: '100%', objectFit: 'cover'}} alt={`Gallery image ${i+1}`} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Lightbox Modal rendered via Portal */}
          {mounted && selectedImageIndex !== null && createPortal(
            <div 
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100vw',
                height: '100vh',
                background: '#000000', /* Solid black background for total focus */
                zIndex: 99999, /* High z-index to stay above everything */
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'zoom-out'
              }}
              onClick={() => setSelectedImageIndex(null)}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedImageIndex(null)}
                style={{ position: 'absolute', top: '30px', right: '30px', background: 'rgba(255,255,255,0.15)', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer', zIndex: 100000, width: '45px', height: '45px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              >✕</button>

              {/* Navigation buttons */}
              <button 
                onClick={prevImage}
                style={{ position: 'absolute', left: '30px', background: 'rgba(255,255,255,0.15)', border: 'none', color: 'white', width: '55px', height: '55px', borderRadius: '50%', fontSize: '1.8rem', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 100000 }}
              >❮</button>

              <div style={{ position: 'relative', maxWidth: '85vw', maxHeight: '85vh', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }} onClick={(e) => e.stopPropagation()}>
                <img 
                  src={db.gallery[selectedImageIndex].startsWith('http') ? db.gallery[selectedImageIndex] : `/media/Clients/${db.gallery[selectedImageIndex]}`} 
                  style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain', borderRadius: '8px' }} 
                  alt="Full screen viewer" 
                />
                
                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', fontWeight: 600 }}>
                  Image {selectedImageIndex + 1} of {db.gallery.length}
                </div>
              </div>

              <button 
                onClick={nextImage}
                style={{ position: 'absolute', right: '30px', background: 'rgba(255,255,255,0.15)', border: 'none', color: 'white', width: '55px', height: '55px', borderRadius: '50%', fontSize: '1.8rem', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 100000 }}
              >❯</button>
            </div>,
            document.body
          )}

          {activeTab === 'videos' && (
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ color: 'var(--secondary)', marginBottom: '2rem' }}>Foundation Videos</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {db.videos.map((vid, i) => (
                  <div key={`gallery-vid-${vid}-${i}`} style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--glass-border)', background: '#000', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                    <video controls style={{ width: '100%', height: 'auto', display: 'block' }}>
                      <source src={`/media/Video/${vid}`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'social' && (
            <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
               <h2 style={{ color: 'var(--secondary)', marginBottom: '2rem' }}>Connect With Us</h2>
               <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2rem' }}>Stay updated with our daily outreach and success stories across all major platforms!</p>
               <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                  <a href="#" className="btn-outline" style={{ fontSize: '1.2rem', padding: '1rem 2rem', borderRadius: '8px' }}>Facebook</a>
                  <a href="https://www.instagram.com/sevasfoundationtrust?igsh=MTdycGFmMzFtcHA3bA%3D%3D" target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: '1.2rem', padding: '1rem 2rem', borderRadius: '8px' }}>Instagram</a>
                  <a href="#" className="btn-outline" style={{ fontSize: '1.2rem', padding: '1rem 2rem', borderRadius: '8px' }}>Twitter (X)</a>
               </div>
            </div>
          )}

          {activeTab === 'events' && (
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
              <h2 style={{ color: 'var(--accent)', marginBottom: '2rem', textAlign: 'center' }}>Upcoming & Ongoing Events</h2>
              {db.events.map((event: any, i) => (
                <div key={`event-card-${event.id || i}`} className="glass" style={{ padding: '2rem', marginBottom: '1.5rem', background: '#fff' }}>
                   <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{event.title}</h3>
                   <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>📅 {event.date} | 📍 {event.location}</p>
                   <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{event.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
