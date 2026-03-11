export default function Journey() {
  const steps = [
    { title: 'Transportation', desc: 'Conveyance arrangements from Udaipur Railway Station.', step: 1 },
    { title: 'Surgery', desc: 'Top healthcare facilities and free-of-cost corrective surgeries.', step: 2 },
    { title: 'Physiotherapy', desc: 'Best post-operative care and medical facilities.', step: 3 },
    { title: 'Vocational Training', desc: 'Training and skill development for those in need.', step: 4 },
    { title: 'Self Employment', desc: 'Self-employed and earning from their own shops.', step: 5 },
    { title: 'Wedding', desc: 'Celebrating togetherness and the start of a new chapter.', step: 6 },
  ];

  return (
    <section id="journey" className="section" style={{ background: 'rgba(255,255,255,0.02)' }}>
      <div className="container">
        <h2 className="section-title">
          Journey of <span className="glowing-text">Differently Abled</span>
        </h2>
        
        <div style={{
          position: 'relative',
          maxWidth: '800px',
          margin: '4rem auto 0',
        }}>
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            left: '50%;',
            transform: 'translateX(-50%)',
            width: '4px',
            height: '100%',
            background: 'linear-gradient(180deg, var(--primary), var(--secondary))',
            borderRadius: '2px',
            opacity: 0.3,
          }}></div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {steps.map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                position: 'relative',
                width: '100%'
              }}>
                <div className="glass" style={{
                  width: 'calc(50% - 3rem)',
                  padding: '2rem',
                  textAlign: index % 2 === 0 ? 'right' : 'left',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    [index % 2 === 0 ? 'right' : 'left']: '-3rem',
                    transform: 'translateY(-50%)',
                    width: '3rem',
                    height: '2px',
                    background: 'var(--primary)',
                    opacity: 0.5
                  }}></div>
                  
                  {/* Step Number Circle */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    [index % 2 === 0 ? 'right' : 'left']: '-4.5rem',
                    transform: 'translateY(-50%)',
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    background: 'var(--background)',
                    border: '2px solid var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    color: 'var(--primary)',
                    boxShadow: '0 0 15px rgba(0, 240, 255, 0.5)',
                    zIndex: 2
                  }}>
                    {item.step}
                  </div>

                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--foreground)' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
