export default function DonateCTA() {
  return (
    <section id="donate" className="section" style={{
      textAlign: 'center',
      padding: '8rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Glow specifically for this section */}
      <div className="bg-glow" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', opacity: 0.2 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: 900,
          marginBottom: '1.5rem',
          lineHeight: 1.2
        }}>
          Save a Life. <br />
          <span className="glowing-text">Donate to Sevas Foundation</span>
        </h2>
        
        <p style={{
          fontSize: '1.2rem',
          maxWidth: '600px',
          margin: '0 auto 3rem',
          color: 'rgba(255, 255, 255, 0.8)',
          lineHeight: 1.6
        }}>
          Your contribution doesn&apos;t just change one life — it uplifts entire families and communities. Join our mission today.
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap'
        }}>
          <button className="btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.3rem' }}>
            Make a Donation
          </button>
          <button className="btn-outline" style={{ padding: '1.2rem 3rem', fontSize: '1.3rem' }}>
            View Upcoming Events
          </button>
        </div>
      </div>
    </section>
  );
}
