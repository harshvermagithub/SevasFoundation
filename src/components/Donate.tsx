import React from 'react';

export default function Donate() {
  return (
    <section id="donate" className="section" style={{ background: 'var(--background)' }}>
      <div className="container">
        <h2 className="section-title">
          <span className="glowing-text">Donate</span> Now
        </h2>
        
        <p style={{
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '1.2rem',
          maxWidth: '800px',
          margin: '0 auto 3rem',
          lineHeight: 1.6
        }}>
          Your contribution helps us provide high-quality artificial limbs and medical care to underprivileged individuals. Choose a convenient way to support our mission.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          
          {/* Paytm/UPI Method */}
          <div className="glass" style={{ padding: '2.5rem', textAlign: 'center', background: 'var(--glass-bg)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Donate via UPI / Paytm</h3>
            <div style={{
              background: '#fff',
              padding: '1rem',
              borderRadius: '8px',
              display: 'inline-block',
              marginBottom: '1rem'
            }}>
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=sevasfoundationtrust%40upi" alt="UPI QR Code" style={{ width: '150px', height: '150px' }} />
            </div>
            <p style={{ color: 'var(--foreground)', fontWeight: 600, fontSize: '1.2rem', marginBottom: '0.5rem' }}>
              UPI ID: <span style={{ color: 'var(--primary)' }}>sevasfoundationtrust@upi</span>
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Scan the QR code or manually enter the UPI ID in any payment app (Paytm, GPay, PhonePe).</p>
          </div>

          {/* Bank details */}
          <div className="glass" style={{ padding: '2.5rem', textAlign: 'left', background: 'var(--light-orange)' }}>
            <h3 style={{ color: 'var(--secondary)', marginBottom: '1.5rem', fontSize: '1.5rem', textAlign: 'center' }}>Direct Bank Transfer</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <strong style={{ color: 'var(--foreground)', display: 'block', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Account Name</strong>
                <span style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Sevas Foundation Trust</span>
              </div>
              
              <div>
                <strong style={{ color: 'var(--foreground)', display: 'block', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Account Number</strong>
                <span style={{ color: 'var(--text-muted)', fontSize: '1.1rem', userSelect: 'all', background: 'var(--glass-bg)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontFamily: 'monospace' }}>32132100000101</span>
              </div>

              <div>
                <strong style={{ color: 'var(--foreground)', display: 'block', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>IFSC Code</strong>
                <span style={{ color: 'var(--text-muted)', fontSize: '1.1rem', userSelect: 'all' }}>BOMBL12345</span>
              </div>
              
              <div>
                <strong style={{ color: 'var(--foreground)', display: 'block', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Bank Name</strong>
                <span style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Bank of India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass" style={{ marginTop: '2rem', padding: '2rem', maxWidth: '1000px', margin: '2rem auto 0', textAlign: 'center' }}>
           <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', fontSize: '1.3rem' }}>Donation Policy & Tax Benefits</h3>
           <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
              All donations made to Sevas Foundation Trust are eligible for tax deductions under section 80G of the Income Tax Act. We strictly adhere to our non-profit donation policies to ensure your contribution directly impacts lives. After making a successful donation, please email us your transaction ID and PAN card details to receive your receipt.
           </p>
        </div>

      </div>
    </section>
  );
}
