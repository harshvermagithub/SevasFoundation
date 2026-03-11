export default function Products() {
  return (
    <section id="products" className="section" style={{ background: 'var(--text-muted)' }}>
      <div className="container">
        <h2 className="section-title">
          Products & <span className="glowing-text">Prosthetics</span>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          
          {/* Lower Extremity */}
          <div className="glass" style={{ padding: '3rem' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontSize: '1.5rem', borderBottom: '1px solid var(--text-muted)', paddingBottom: '0.5rem' }}>
              Lower Extremity Prosthetics
            </h3>
            <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.5rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><strong>Above Knee Prosthesis:</strong> Options tailored for Low, Average, and High Activity levels (featuring safety, independent donning/doffing, and dynamic responses).</li>
              <li><strong>Below Knee Prosthesis:</strong> Designed for maximum comfort, robustness, and functionality across all activity levels.</li>
              <li><strong>Socket Technology:</strong> Including standard belts, locks with gel liners, passive/active vacuums, and carbon fiber sockets.</li>
              <li><strong>Prosthetic Feet Range:</strong> From K1 (Low Activity) like Sach Foot to K3 (High Activity) like Flex Foot and Carbon Fibre Feet. Featuring proprietary designs like the S-PACE Foot and GRACE Foot.</li>
            </ul>
          </div>

          {/* Upper Extremity */}
          <div className="glass" style={{ padding: '3rem' }}>
            <h3 style={{ color: 'var(--secondary)', marginBottom: '1.5rem', fontSize: '1.5rem', borderBottom: '1px solid var(--text-muted)', paddingBottom: '0.5rem' }}>
              Upper Extremity Prosthetics
            </h3>
            <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.5rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><strong>Above & Below Elbow Options:</strong> Cosmetic hands, mechanical hands with harness cables, Myo-Electric hands, and i-Digit limbs.</li>
            </ul>
          </div>

          {/* Custom Orthotics */}
          <div className="glass" style={{ padding: '3rem' }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem', fontSize: '1.5rem', borderBottom: '1px solid var(--text-muted)', paddingBottom: '0.5rem' }}>
              Custom Orthotics (Bracing & Supports)
            </h3>
            <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.5rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><strong>Foot & Ankle:</strong> CAD-CAM Milled Insoles, Ankle Foot Orthosis (AFO), CROW Walkers, and Partial Foot Orthoprosthesis.</li>
              <li><strong>Knee & Hip:</strong> Knee Orthosis (OA and Turn Buckle), KAFO, Femur Fracture Orthosis, and Hip Abduction Orthosis.</li>
              <li><strong>Upper Extremity:</strong> WHO static/dynamic splints, Aeroplane splints, and Humerus Fracture Orthosis.</li>
              <li><strong>Spinal Orthotics:</strong> Lumbo Sacral Orthosis (LSO), TLSO, CTLSO (Milwaukee/Scoliosis Brace), and Hyperextension Braces.</li>
            </ul>
          </div>

          {/* Paediatric & Specialized */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="glass" style={{ padding: '2rem' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontSize: '1.3rem' }}>Paediatric Solutions</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                UCBL Foot Orthosis, Supramalleolar Orthosis (SMO), DB Splints for Club Foot, Floor Reaction Orthosis, Pavlik Harness, and Cranial Helmets.
              </p>
            </div>
            <div className="glass" style={{ padding: '2rem' }}>
              <h3 style={{ color: 'var(--secondary)', marginBottom: '1.5rem', fontSize: '1.3rem' }}>Specialized Care</h3>
              <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.5rem', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong>Diabetic Footwear:</strong> Offloading footwear, insoles, shoes, and sandals.</li>
                <li><strong>Walking Braces:</strong> Adv. pneumatic boots & walkers.</li>
                <li><strong>Silicone Cosmetics:</strong> Fingers, partial hands, and toes.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
