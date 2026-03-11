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
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>
            Sevas <span className="glowing-text">Foundation</span>
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
            Empowering the differently-abled to lead a life of dignity, respect, and independence. Together, we heal, enrich, and empower.
          </p>
        </div>
        
        <div style={{ flex: '1 1 200px' }}>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><a href="#about" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>About Us</a></li>
            <li><a href="#work" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Our Initiatives</a></li>
            <li><a href="#stories" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Success Stories</a></li>
            <li><a href="#donate" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Make a Donation</a></li>
          </ul>
        </div>
        
        <div style={{ flex: '1 1 300px' }}>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--secondary)' }}>Contact</h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem' }}>📍 Udaipur, Rajasthan, India</p>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem' }}>📧 info@sevasfoundation.org</p>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>📞 +91 123 456 7890</p>
        </div>
      </div>
      
      <div style={{
        textAlign: 'center',
        paddingTop: '2rem',
        borderTop: '1px solid var(--glass-border)',
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: '0.9rem'
      }}>
        © {new Date().getFullYear()} Sevas Foundation. All rights reserved.
      </div>
    </footer>
  );
}
