export default function Services() {
  const services = [
    "Customise Insole and Medical Footwear for Diabetic and Orthopedic Foot Conditions",
    "Modular Prosthetic Care for all types of Upper & Lower Limbs",
    "Customise Silicone Cosmetic Restoration Care",
    "Medical Pressure Garment Care for Burns and Varicose Vein Patients",
    "Postoperative Fracture Orthotic Care",
    "Rehabilitation and Post Amputation Care",
    "Arthritic Pain Relieving Orthotic Care",
    "Pediatric Prosthetic & Orthotic Care",
    "Spinal Orthotic Care & Supportive Care",
    "Silicone Gel Sheet Care",
    "Orthotic Treatment for Preventive & Corrective Care of Orthopedic Deformities",
    "Orthotic Treatment for Congenital Deformities",
    "Gait Training and Mobility Aids"
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">
          Our <span className="glowing-text">Services</span>
        </h2>
        <p style={{
          textAlign: 'center',
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: '1.2rem',
          maxWidth: '800px',
          margin: '0 auto 3rem',
          lineHeight: 1.6
        }}>
          We offer a comprehensive range of clinical and rehabilitation services tailored to individual needs:
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {services.map((service, index) => (
            <div key={index} className="glass" style={{ padding: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <span style={{ color: 'var(--primary)', fontSize: '1.2rem', marginTop: '0.2rem' }}>✦</span>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.5, margin: 0 }}>
                {service}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
