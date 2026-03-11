export default function ContactUs() {
  return (
    <section id="contact" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="bg-glow" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', opacity: 0.15 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title">
          Get in <span className="glowing-text">Touch</span>
        </h2>
        
        <p style={{
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '1.2rem',
          maxWidth: '600px',
          margin: '0 auto 4rem',
        }}>
          We are here to assist you with your rehabilitation and mobility needs.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div className="glass" style={{ padding: '3rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem', textShadow: '0 0 20px var(--primary)' }}>📍</div>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.3rem' }}>Address</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
              # 209, 100 Feet Ring Road,<br/>
              BSK 3rd Stage,<br/>
              Bengaluru - 560 085
            </p>
          </div>

          <div className="glass" style={{ padding: '3rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem', textShadow: '0 0 20px var(--secondary)' }}>📞</div>
            <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem', fontSize: '1.3rem' }}>Phone Numbers</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, margin: 0 }}>
              +91 81399 55669<br/>
              +91 99861 44329<br/>
              +91 95387 94917<br/>
              +91 88843 44199
            </p>
          </div>

          <div className="glass" style={{ padding: '3rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem', textShadow: '0 0 20px var(--accent)' }}>📧</div>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', fontSize: '1.3rem' }}>Email Addresses</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, margin: 0, wordBreak: 'break-all' }}>
              hitechartificiallimbcentre@gmail.com<br/><br/>
              relifehealthcarehospital@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
