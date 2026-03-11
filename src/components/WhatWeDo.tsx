export default function WhatWeDo() {
  const pillars = [
    {
      title: 'Heal',
      description: 'Making the best medical and healthcare facilities easily accessible for individuals in need with free-of-cost corrective surgeries.',
      icon: '🏥',
      color: 'var(--primary)',
    },
    {
      title: 'Enrich',
      description: 'Organising mass marriages and providing high-quality education to children to enrich their lives for a bright future.',
      icon: '🎓',
      color: 'var(--secondary)',
    },
    {
      title: 'Empower',
      description: 'Providing platforms like talent shows, sports, and skill-development initiatives including computer and tailoring training.',
      icon: '⚡',
      color: 'var(--accent)',
    }
  ];

  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="section-title">What We <span className="glowing-text">Do</span></h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '4rem',
        }}>
          {pillars.map((pillar, idx) => (
            <div key={idx} className="glass" style={{ padding: '3rem 2rem', textAlign: 'center' }}>
              <div style={{
                fontSize: '4rem',
                marginBottom: '1.5rem',
                display: 'inline-block',
                filter: `drop-shadow(0 0 20px ${pillar.color})`
              }}>
                {pillar.icon}
              </div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: pillar.color, fontWeight: 700 }}>
                {pillar.title}
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.7 }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
