import Link from 'next/link';

export default function Hero() {
  return (
    <section className="section" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      paddingTop: '8rem',
    }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <img src="/logo_white.png" alt="Sevas Foundation Logo" style={{ height: '150px', width: 'auto' }} />
        </div>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: 900,
          lineHeight: 1.1,
          marginBottom: '1rem',
        }}>
          Sevas <br />
          <span className="glowing-text">Foundation</span>
        </h1>
        
        <h2 style={{
          fontSize: '1.2rem',
          color: 'var(--primary)',
          fontWeight: 600,
          marginBottom: '2rem',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}>
          Registered NGO under Trust Act, Bangalore
        </h2>

        <p style={{
          fontSize: '1.4rem',
          color: 'var(--text-muted)',
          maxWidth: '800px',
          margin: '0 auto 1.5rem',
          lineHeight: 1.6,
          fontStyle: 'italic',
        }}>
          &quot;It&apos;s not our disabilities, it&apos;s our abilities that count...&quot;
        </p>

        <p style={{
          fontSize: '1.1rem',
          color: 'var(--text-muted)',
          maxWidth: '800px',
          margin: '0 auto 3rem',
          lineHeight: 1.7,
        }}>
          Welcome to Sevas Foundation. We are a premier rehabilitation NGO focused on providing state-of-the-art Prosthetic & Orthotic services through our dedicated network. We have built our reputation on innovation, quality services, and bridging global hi-tech innovations and compassion to empower lives in India.
        </p>
        
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/services" className="btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}>
            Explore Our Services
          </Link>
          <Link href="/#contact" className="btn-outline" style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}>
            Support Our Cause
          </Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginTop: '6rem',
          textAlign: 'left'
        }}>
          <div className="glass" style={{ padding: '2rem' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Global Standards</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>We import systems from leading prosthetic and orthotic companies across the globe.</p>
          </div>
          <div className="glass" style={{ padding: '2rem' }}>
            <h3 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>Highest Quality</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Assured quality of products and clinical services.</p>
          </div>
          <div className="glass" style={{ padding: '2rem' }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Comprehensive Care</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>From pediatric to geriatric, serving low to high activity levels.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
