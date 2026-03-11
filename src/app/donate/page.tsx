"use client";
import React, { useState } from 'react';

export default function DonatePage() {
  const [activeTab, setActiveTab] = useState('paytm');

  const tabs = [
    { id: 'paytm', label: 'Donate via Paytm / UPI' },
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
          {activeTab === 'paytm' && (
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h2 style={{ color: 'var(--primary)', marginBottom: '2rem' }}>Donate Seamlessly via UPI / Paytm</h2>
              <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', display: 'inline-block', marginBottom: '1.5rem' }}>
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=sevasfoundationtrust%40upi" alt="UPI QR Code" style={{ width: '200px', height: '200px' }} />
              </div>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>UPI ID: <span style={{ color: 'var(--primary)' }}>sevasfoundationtrust@upi</span></p>
              <p style={{ color: 'var(--text-muted)' }}>Scan using any UPI enabled app like Paytm, GPay, or PhonePe to make a direct donation.</p>
            </div>
          )}

          {activeTab === 'bank' && (
            <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
              <h2 style={{ color: 'var(--secondary)', marginBottom: '2rem', textAlign: 'center' }}>Direct Bank Transfer</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'rgba(255,255,255,0.8)', padding: '2rem', borderRadius: '12px' }}>
                <div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Account Name</div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--foreground)' }}>Sevas Foundation Trust</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Account Number</div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--foreground)', fontFamily: 'monospace' }}>32132100000101</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>IFSC Code</div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--foreground)', fontFamily: 'monospace' }}>BOMBL12345</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Bank</div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--foreground)' }}>Bank of India</div>
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
