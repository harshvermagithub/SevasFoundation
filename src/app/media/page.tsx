"use client";
import React, { useState } from 'react';

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState('gallery');

  const tabs = [
    { id: 'gallery', label: 'Images Gallery' },
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
                 <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--glass-border)', height: '250px', background: '#ccc' }}>
                   <img src="/limb.png" style={{width: '100%', height: '100%', objectFit: 'cover'}} alt="Prosthetics" />
                 </div>
                 <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--glass-border)', height: '250px', background: '#ccc' }}>
                   <img src="/media__1773247041332.jpg" style={{width: '100%', height: '100%', objectFit: 'cover'}} alt="Patient Recovery" />
                 </div>
                 <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--glass-border)', height: '250px', background: '#ccc' }}>
                   <img src="/media__1773247041354.jpg" style={{width: '100%', height: '100%', objectFit: 'cover'}} alt="New Fitted Leg" />
                 </div>
                 <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--glass-border)', height: '250px', background: '#ccc' }}>
                   <img src="/media__1773247041371.jpg" style={{width: '100%', height: '100%', objectFit: 'cover'}} alt="Elderly Patient Help" />
                 </div>
                 <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--glass-border)', height: '250px', background: '#ccc' }}>
                   <img src="/media__1773247041410.jpg" style={{width: '100%', height: '100%', objectFit: 'cover'}} alt="Staff and Patient" />
                 </div>
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
              
              <div className="glass" style={{ padding: '2rem', marginBottom: '1.5rem', background: '#fff' }}>
                 <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Free Artificial Limb Distribution Camp - Rural Bangalore</h3>
                 <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>📅 October 15, 2026 | 📍 Bangalore Rural District Camp</p>
                 <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>We will be hosting a massive free limb measurement and distribution camp for over 500 pre-registered individuals in rural Bangalore.</p>
              </div>

              <div className="glass" style={{ padding: '2rem', background: '#fff' }}>
                 <h3 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>Prosthetics Awareness Seminar</h3>
                 <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>📅 November 02, 2026 | 📍 Jayanagar Medical Assembly Hall</p>
                 <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>A comprehensive seminar led by top orthotics aiming to educate families and practitioners on care and customisation of artificial limbs.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
