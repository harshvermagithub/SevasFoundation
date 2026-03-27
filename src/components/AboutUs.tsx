export default function AboutUs() {
  return (
    <section id="about" className="section" style={{ background: 'var(--light-orange)' }}>
      <div className="container">
        <h2 className="section-title">
          Company <span className="glowing-text">Profile</span>
        </h2>
        
        <div className="glass" style={{ padding: '3rem', marginBottom: '2rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.2rem' }}>
              <strong>Sevas Foundation Trust</strong> is managed by a dedicated Board of Trustees and operated daily by our Managing Trustee. Our ongoing effort is to introduce, adapt, and diffuse hi-technology innovations in India, leading to state-of-the-art technology in the Prosthetics & Orthotics field being brought into the country to serve those in need.
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', 
            gap: '1.5rem',
            justifyContent: 'center',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <img src="/media/About/profile (1).jpeg" alt="Chairman - SHIVANAND C.V" title="SHIVANAND C.V (Chairman)" style={{ width: '100%', height: 'auto', aspectRatio: '9/16', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
            <img src="/media/About/profile (2).jpeg" alt="Trustee - ARJUN M REVANKAR" title="ARJUN M REVANKAR (Trustee)" style={{ width: '100%', height: 'auto', aspectRatio: '9/16', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
            <img src="/media/About/profile (3).jpeg" alt="Trustee - Dr. SUPRIYA SHANKAR" title="Dr. SUPRIYA SHANKAR (Trustee)" style={{ width: '100%', height: 'auto', aspectRatio: '9/16', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
            <img src="/media/About/profile (4).jpeg" alt="Trustee Profile 4" style={{ width: '100%', height: 'auto', aspectRatio: '9/16', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
            <img src="/media/About/profile (5).jpeg" alt="Trustee Profile 5" style={{ width: '100%', height: 'auto', aspectRatio: '9/16', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
            <img src="/media/About/profile (6).jpeg" alt="Trustee Profile 6" style={{ width: '100%', height: 'auto', aspectRatio: '9/16', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
            <img src="/media/About/profile (7).jpeg" alt="Trustee - Dr. SPOORTHI S" title="Dr. SPOORTHI S (Trustee)" style={{ width: '100%', height: 'auto', aspectRatio: '9/16', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
            <img src="/media/About/profile (8).jpeg" alt="Trustee Profile 8" style={{ width: '100%', height: 'auto', aspectRatio: '9/16', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div className="glass" style={{ padding: '2rem' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.3rem' }}>COMPANY MISSION</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
              To provide reliable, cost-effective, technologically superior Prosthetic & Orthotic products with technical & clinical support to maximize benefits to practitioners and their patients in India and its neighboring countries, irrespective of their financial means.
            </p>
          </div>

          <div className="glass" style={{ padding: '2rem' }}>
            <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem', fontSize: '1.3rem' }}>COMPANY PHILOSOPHY</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
              We are dedicated to providing Prosthetic & Orthotic products and services of the highest precision and quality at subsidized or free costs for abiding satisfaction and empowerment of differently-abled individuals.
            </p>
          </div>
        </div>

        <div className="glass" style={{ padding: '3rem', marginBottom: '2rem' }}>
          <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>AIMS & OBJECTIVES</h3>
          <ul style={{ 
            color: 'var(--text-muted)', 
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
