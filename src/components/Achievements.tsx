export default function Achievements() {
  const stats = [
    { number: '4,52,065+', label: 'Corrective Surgeries' },
    { number: '3,97,833+', label: 'Callipers Distributed' },
    { number: '2,74,846+', label: 'TriCycles Distributed' },
    { number: '2,95,654+', label: 'Sweaters Distributed' },
    { number: '39,388+', label: 'Artificial Limbs Provided' },
    { number: '3,455+', label: 'Vocational Trainings' },
  ];

  return (
    <section className="section" style={{
      position: 'relative',
      background: 'linear-gradient(to right, rgba(0, 240, 255, 0.05), rgba(189, 0, 255, 0.05))',
      padding: '8rem 0',
      borderTop: '1px solid var(--glass-border)',
      borderBottom: '1px solid var(--glass-border)'
    }}>
      <div className="container">
        <h2 className="section-title" style={{ marginBottom: '5rem' }}>
          With Your Help, <br />
          <span className="glowing-text">We Achieved</span>
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          textAlign: 'center'
        }}>
          {stats.map((stat, i) => (
            <div key={i} style={{ padding: '1rem' }}>
              <div style={{
                fontSize: '3.5rem',
                fontWeight: 900,
                color: 'var(--foreground)',
                marginBottom: '1rem',
                textShadow: '0 0 20px rgba(0, 240, 255, 0.3)',
                fontFamily: 'monospace',
                letterSpacing: '-2px'
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '1.1rem',
                color: 'var(--primary)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
