"use client";
import React, { useState } from 'react';

export default function DonatePage() {
  const [activeTab, setActiveTab] = useState('qr');

  const tabs = [
    { id: 'qr', label: 'Donate via QR Code / UPI' },
    { id: 'bank', label: 'Bank Details' },
    { id: 'policy', label: 'Donation Policy' }
  ];

  return (
    <div className="page-content" style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <div className="container" style={{ padding: '4rem 2rem' }}>
        <h1 className="section-title">Support Our <span className="glowing-text">Mission</span></h1>
        
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
          {activeTab === 'qr' && (
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h2 style={{ color: 'var(--primary)', marginBottom: '2rem' }}>Donate Seamlessly via QR Code / UPI</h2>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <div style={{ background: '#fff', padding: '1rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                  <img src="/media/donate_3.png" alt="QR Code 1" style={{ maxWidth: '300px', height: 'auto', borderRadius: '8px' }} />
                </div>
                <div style={{ background: '#fff', padding: '1rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                  <img src="/media/donate_4.png" alt="QR Code 2" style={{ maxWidth: '300px', height: 'auto', borderRadius: '8px' }} />
                </div>
              </div>
              <p style={{ color: 'var(--text-muted)' }}>Scan using any UPI enabled app like Paytm, PhonePe, or Google Pay to make a direct donation.</p>
            </div>
          )}

          {activeTab === 'bank' && (
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ color: 'var(--secondary)', marginBottom: '2rem' }}>Direct Bank Transfer</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
                <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--glass-border)', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
                  <img src="/media/donate_1.png" alt="Bank Certificate 1" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
                <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--glass-border)', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
                  <img src="/media/donate_2.png" alt="Bank Certificate 2" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'policy' && (
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ color: 'var(--accent)', marginBottom: '2rem' }}>Donation Policy & Tax Benefits</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                At Sevas Foundation Trust, every Rupee donated goes directly towards empowering the lives of differently-abled individuals. We enforce strict financial transparency and strictly adhere to all NGO and regulatory guidelines.
              </p>
              <br/>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                <strong>Tax Exemptions (80G/12A):</strong> All donations made are fully eligible for tax exemptions under Section 80G of the Indian Income Tax Act. Upon successful transfer, please email your transaction reference number alongside your PAN card details to <em>sevasfoundationtrustbangalore@gmail.com</em>, and our registry team will issue your official tax receipt and certificate within 48 to 72 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
