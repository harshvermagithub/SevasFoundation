export default function SuccessStories() {
  const stories = [
    { name: 'Abhishek', highlight: 'Overcame physical challenges to become an athlete.' },
    { name: 'Umang', highlight: 'Found independence through our vocational training.' },
    { name: 'Ravi Devangan', highlight: 'Successfully running his own mobile repair shop.' },
    { name: 'Ankit', highlight: 'Walked on his own after successful corrective surgery.' },
    { name: 'Chandni', highlight: 'Started her new life journey through our mass wedding event.' },
    { name: 'Radha', highlight: 'Achieved her dream of becoming a computer operator.' },
  ];

  return (
    <section id="stories" className="section">
      <div className="container">
        <h2 className="section-title">
          Success <span className="glowing-text">Stories</span>
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          {stories.map((story, i) => (
            <div key={i} className="glass" style={{
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                opacity: 0.8
              }}></div>
              
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1rem',
                fontWeight: 700,
                color: 'var(--foreground)'
              }}>
                {story.name}&apos;s Story
              </h3>
              
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: 1.6,
                flex: 1,
                marginBottom: '1.5rem'
              }}>
                &quot;{story.highlight}&quot;
              </p>
              
              <a href="#" style={{
                color: 'var(--primary)',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginTop: 'auto'
              }}>
                Read More <span style={{ fontSize: '1.2rem' }}>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
