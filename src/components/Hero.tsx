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
        <h1 style={{
          fontSize: 'clamp(3rem, 6vw, 5rem)',
          fontWeight: 900,
          lineHeight: 1.1,
          marginBottom: '2rem',
        }}>
          Give Wings to the <br />
          <span className="glowing-text">Dreams of Little Children</span>
        </h1>
        
        <p style={{
          fontSize: '1.25rem',
          color: 'rgba(255, 255, 255, 0.8)',
          maxWidth: '700px',
          margin: '0 auto 3rem',
          lineHeight: 1.6,
        }}>
          Transforming lives with advanced technology and compassionate care. 
          Your support funds free surgeries, education, and skill training for the differently-abled.
        </p>
        
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="#donate" className="btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}>
            Donate Now
          </Link>
          <Link href="#work" className="btn-outline" style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}>
            Explore Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
