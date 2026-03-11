export default function AboutUs() {
  return (
    <section id="about" className="section" style={{ background: 'rgba(255,255,255,0.02)' }}>
      <div className="container">
        <h2 className="section-title">
          Company <span className="glowing-text">Profile</span>
        </h2>
        
        <div className="glass" style={{ padding: '3rem', marginBottom: '2rem' }}>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            <strong>Re-life Medical & Rehabilitation Services Pvt. Ltd.</strong> is managed by a dedicated Board of Directors and operated daily by our Managing Director. Our ongoing effort is to introduce, adapt, and diffuse hi-technology innovations in India, leading to state-of-the-art technology in the Prosthetics & Orthotics field being brought into the country.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div className="glass" style={{ padding: '2rem' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.3rem' }}>COMPANY MISSION</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.7 }}>
              To provide reliable, cost-effective, technologically superior Prosthetic & Orthotic products with technical & clinical support to maximize benefits to practitioners and their patients in India and its neighboring countries.
            </p>
          </div>

          <div className="glass" style={{ padding: '2rem' }}>
            <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem', fontSize: '1.3rem' }}>COMPANY PHILOSOPHY</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.7 }}>
              We are dedicated to providing Prosthetic & Orthotic products and services of the highest precision and quality at a reasonable cost for abiding customer satisfaction.
            </p>
          </div>
        </div>

        <div className="glass" style={{ padding: '3rem', marginBottom: '2rem' }}>
          <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>AIMS & OBJECTIVES</h3>
          <ul style={{ 
            color: 'rgba(255, 255, 255, 0.9)', 
            lineHeight: 1.8, 
            paddingLeft: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            fontSize: '1.1rem'
          }}>
            <li>To manufacture, assemble, and fit high-tech artificial limbs and orthotic appliances for physically challenged persons.</li>
            <li>To establish and run first-class Prosthetic & Orthotic Limb Centres in cosmopolitan towns, including New Delhi, for clinical services, repairs, and refitments.</li>
            <li>To provide services and products to hospitals, institutions, clinics, and individuals through franchisees and stockists.</li>
            <li>To undertake the training of Prosthetic & Orthotic engineers and promote seminars and studies in the field.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
