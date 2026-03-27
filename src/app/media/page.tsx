"use client";
import React, { useState, useEffect } from 'react';

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState('gallery');
  const [db, setDb] = useState<{ gallery: string[], videos: string[], events: any[] }>({ gallery: [], videos: [], events: [] });

  useEffect(() => {
    fetch('/api/admin')
      .then(res => res.json())
      .then(data => setDb(data));
  }, []);

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
                  <div key={`gallery-img-${img}-${i}`} style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--glass-border)', height: '250px', background: '#ccc', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                    <img src={img.startsWith('http') ? img : `/media/Clients/${img}`} style={{width: '100%', height: '100%', objectFit: 'cover'}} alt={`Gallery image ${i+1}`} />
                  </div>
                ))}
              </div>
            </div>
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
                  <a href="#" className="btn-outline" style={{ fontSize: '1.2rem', padding: '1rem 2rem', borderRadius: '8px' }}>Instagram</a>
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
