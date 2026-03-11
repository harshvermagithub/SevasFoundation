import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--glass-border)',
      padding: '4rem 2rem 2rem',
      marginTop: '6rem',
      background: 'var(--glass-bg)',
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
            Sevas <br/><span className="glowing-text">Foundation Trust</span>
          </h2>
          <h3 style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
            Registered NGO
          </h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
            &quot;It&apos;s not our disabilities, it&apos;s our abilities that count...&quot;
          </p>
        </div>
        
        <div style={{ flex: '1 1 200px' }}>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><Link href="/" style={{ color: 'var(--text-muted)' }}>Home</Link></li>
            <li><Link href="/about" style={{ color: 'var(--text-muted)' }}>About Us</Link></li>
            <li><Link href="/services" style={{ color: 'var(--text-muted)' }}>Services</Link></li>
            <li><Link href="/products" style={{ color: 'var(--text-muted)' }}>Products & Prosthetics</Link></li>
            <li><Link href="/#contact" style={{ color: 'var(--text-muted)' }}>Contact Us</Link></li>
          </ul>
        </div>
        
        <div style={{ flex: '1 1 300px' }}>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--secondary)' }}>Contact</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem', lineHeight: 1.5 }}>
            📍 No 208 & 209, 100 feet ring road, 4th Block, Banashankari 3rd Stage, Banashankari, Bengaluru, Karnataka 560085
          </p>
          <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            📧 sevasfoundationtrustbangalore@gmail.com
          </p>
          <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            📞 +91 88843 44199 / 95387 94917 / 90088 55404
          </p>
        </div>
      </div>
      
      <div style={{
        textAlign: 'center',
        paddingTop: '2rem',
        borderTop: '1px solid var(--glass-border)',
        color: 'var(--text-muted)',
        fontSize: '0.9rem'
      }}>
        © {new Date().getFullYear()} Sevas Foundation Trust. All rights reserved.
      </div>
    </footer>
  );
}
