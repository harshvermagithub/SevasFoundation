export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--glass-border)',
      padding: '4rem 2rem 2rem',
      marginTop: '6rem',
      background: 'rgba(0, 0, 0, 0.2)',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '2rem',
        marginBottom: '4rem',
      }}>
        <div style={{ flex: '1 1 300px' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem' }}>
            Re-life Medical & <br/><span className="glowing-text">Rehabilitation Services Pvt. Ltd.</span>
          </h2>
          <h3 style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1rem' }}>
            Hi-Tech Artificial Limbs Center
          </h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
            "It's not our disabilities, it's our abilities that count..."
          </p>
        </div>
        
        <div style={{ flex: '1 1 200px' }}>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><a href="/" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Home</a></li>
            <li><a href="#about" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>About Us</a></li>
            <li><a href="#services" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Services</a></li>
            <li><a href="#products" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Products & Prosthetics</a></li>
            <li><a href="#contact" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Contact Us</a></li>
          </ul>
        </div>
        
        <div style={{ flex: '1 1 300px' }}>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--secondary)' }}>Contact</h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem', lineHeight: 1.5 }}>
            📍 # 209, 100 Feet Ring Road, BSK 3rd Stage, Bengaluru - 560 085
          </p>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem' }}>
            📧 hitechartificiallimbcentre@gmail.com
          </p>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem' }}>
            📞 +91 81399 55669 / 99861 44329
          </p>
        </div>
      </div>
      
      <div style={{
        textAlign: 'center',
        paddingTop: '2rem',
        borderTop: '1px solid var(--glass-border)',
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: '0.9rem'
      }}>
        © {new Date().getFullYear()} Re-life Medical & Rehabilitation Services Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
