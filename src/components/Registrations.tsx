export default function Registrations() {
  const registrations = [
    { title: "Trust Act Registration", desc: "Regd. Under Trust Act Bangalore, Karnataka." },
    { title: "Registration No.", desc: "BNG (U) NR 786/2012-2013/BK IV (Date: 14.03.2013)" },
    { title: "PAN NO", desc: "AAMBTS5870Q" },
    { title: "12A Regn. No.", desc: "AAMT55870QE20219 (Dated 10/03/2022)" },
    { title: "80G Regn. No.", desc: "AMTS5870QF20225 (Dated 10/03/2022)" },
    { title: "FCRA Regn. No.", desc: "Applied" },
    { title: "Unique NGO ID", desc: "KA/2022/0308908" },
    { title: "CSR Details", desc: "CSR00025536 | 23-03-2022 (SRN-T90138967)" },
  ];

  return (
    <section id="registrations" className="section" style={{ background: 'var(--glass-bg)' }}>
      <div className="container">
        <h2 className="section-title">
          Accreditations & <span className="glowing-text">Registrations</span>
        </h2>
        
        <p style={{
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '1.2rem',
          maxWidth: '800px',
          margin: '0 auto 3rem',
          lineHeight: 1.6
        }}>
          Sevas Foundation Trust is a fully registered and accredited NGO, ensuring complete transparency and compliance for our donors and partners.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {registrations.map((item, index) => (
            <div key={index} className="glass" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.1rem' }}>{item.title}</span>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
