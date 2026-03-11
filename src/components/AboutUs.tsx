export default function AboutUs() {
  return (
    <section id="about" className="section" style={{ background: 'rgba(255,255,255,0.02)' }}>
      <div className="container">
        <h2 className="section-title">
          Company <span className="glowing-text">Profile</span>
        </h2>
        
        <div className="glass" style={{ padding: '3rem', marginBottom: '2rem' }}>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            <strong>Sevas Foundation</strong> is a rehabilitation services company focussed on Prosthetic & Orthotic services through its Company run clinics and dealers. It is managed by a Board of Directors & has its Registered # 209, 100 Feet Ring Road, BSK 3rd Stage, Bengaluru - 560 085.
          </p>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.8, fontSize: '1.1rem' }}>
            Company effort to introduce, adapt and diffuse hi-technology innovations in India led to state of the art technology in the Prosthetics & Orthotics field being brought into the Country. The day to day running of the Company is managed by a Managing Director. The Company has built its reputation through innovation, quality services and customer care.
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
              To provide reliable, cost effective, technologically superior Prosthetic & Orthotic products with technical & clinical support to maximize benefits to practitioners and their patients in India & its neighbouring countries.
            </p>
          </div>

          <div className="glass" style={{ padding: '2rem' }}>
            <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem', fontSize: '1.3rem' }}>COMPANY PHILOSOPHY</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.7 }}>
              The Company is dedicated to provide Prosthetic & Orthotic products and services of the highest quality and precision at reasonable cost for abiding customer satisfaction.
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
            <li>The Company has the following aims & objectives:</li>
            <li>To manufacture, assemble and carry out fittings of high tech artificial limbs and other Prosthetic and Orthotic appliances and components to the physically challenged persons.</li>
            <li>To establish and run Prosthetic & Orthotic Limb Centres in New Delhi and other cosmopoliton towns of the Country in order to provide first Class clinical Prosthetic and Orthotic services. This would include repairs, refitments and replacement of components.</li>
            <li>To provide Prosthetic & Orthotic services through franchisee/stockists.</li>
            <li>To provide and other selected Prosthetic & Orthotic products to hospitals, institutions, clinics, limb fitting centres and individuals as per their requirements.</li>
            <li>To undertake training of Prosthetic & Orthotic engineers and in systems and promote seminars & studies in Prosthetics & Orthotics.</li>
          </ul>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          <div className="glass" style={{ padding: '2rem' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.3rem' }}>PRODUCT RANGE</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.7 }}>
              The Company fits the entire range of Prosthetic & Orthotic systems for lower & upper extremities. It imports these systems from leading Prosthetic and Orthotic companies in from all across the globe.
            </p>
          </div>

          <div className="glass" style={{ padding: '2rem' }}>
            <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem', fontSize: '1.3rem' }}>QUALITY ASSURANCE</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.7 }}>
              It&apos;s quality of products and the services provided are of the highest quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
