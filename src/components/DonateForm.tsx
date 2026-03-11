"use client";
import React, { useState } from 'react';

export default function DonateForm() {
  const [formData, setFormData] = useState({
    purpose: 'Free of Cost Artificial Limb Distribution',
    quantity: 1,
    name: '',
    mobile: '',
    email: '',
    pan: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        ...formData,
        quantity: 1,
        name: '',
        mobile: '',
        email: '',
        pan: ''
      });
      alert("Thank you for your generous pledge! Our team will contact you shortly to complete the donation process.");
    }, 1500);
  };

  return (
    <section id="donate-form" className="section" style={{ background: 'var(--light-orange)' }}>
      <div className="container">
        <h2 className="section-title">
          <span className="glowing-text">Donate</span> for a Cause
        </h2>
        <p style={{
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '1.2rem',
          maxWidth: '800px',
          margin: '0 auto 3rem',
          lineHeight: 1.6
        }}>
          Contribute toward providing free-of-cost prosthetic legs and arms. Your support can help someone walk again.
        </p>

        <div className="glass" style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem', background: '#ffffff' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="purpose" style={{ fontWeight: 600, color: 'var(--foreground)' }}>Purpose</label>
              <select 
                id="purpose" 
                name="purpose" 
                value={formData.purpose} 
                onChange={handleChange}
                style={{ padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--background)', fontSize: '1rem' }}
                required
              >
                <option value="Free of Cost Artificial Limb Distribution">Free of Cost Artificial Limb Distribution</option>
                <option value="General Foundation Donation">General Foundation Donation</option>
                <option value="Physiotherapy Camp Support">Physiotherapy Camp Support</option>
              </select>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="quantity" style={{ fontWeight: 600, color: 'var(--foreground)' }}>Quantity (No. of Limbs)</label>
                <input 
                  type="number" 
                  id="quantity" 
                  name="quantity" 
                  min="1"
                  value={formData.quantity} 
                  onChange={handleChange}
                  style={{ padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--background)', fontSize: '1rem' }}
                  required
                />
              </div>

              <div style={{ flex: '2 1 300px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="name" style={{ fontWeight: 600, color: 'var(--foreground)' }}>Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Enter your full name" 
                  value={formData.name} 
                  onChange={handleChange}
                  style={{ padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--background)', fontSize: '1rem' }}
                  required
                />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 250px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="mobile" style={{ fontWeight: 600, color: 'var(--foreground)' }}>Mobile Number</label>
                <input 
                  type="tel" 
                  id="mobile" 
                  name="mobile" 
                  placeholder="+91" 
                  value={formData.mobile} 
                  onChange={handleChange}
                  style={{ padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--background)', fontSize: '1rem' }}
                  required
                />
              </div>

              <div style={{ flex: '1 1 250px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="email" style={{ fontWeight: 600, color: 'var(--foreground)' }}>Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="your.email@example.com" 
                  value={formData.email} 
                  onChange={handleChange}
                  style={{ padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--background)', fontSize: '1rem' }}
                  required
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="pan" style={{ fontWeight: 600, color: 'var(--foreground)' }}>PAN Card Number <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 'normal' }}>(Optional for 80G Tax Exemption)</span></label>
              <input 
                type="text" 
                id="pan" 
                name="pan" 
                placeholder="ABCDE1234F" 
                value={formData.pan} 
                onChange={handleChange}
                style={{ padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--background)', fontSize: '1rem', textTransform: 'uppercase' }}
              />
            </div>

            <button 
              type="submit" 
              className="btn-primary" 
              style={{ padding: '1rem', fontSize: '1.2rem', marginTop: '1rem', width: '100%', opacity: isSubmitted ? 0.7 : 1 }}
              disabled={isSubmitted}
            >
              {isSubmitted ? 'Processing...' : 'Donate Now'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
