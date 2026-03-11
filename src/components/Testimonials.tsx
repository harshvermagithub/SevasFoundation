export default function Testimonials() {
  const testimonials = [
    {
      text: "Sevas Foundation is doing incredible work by empowering those who need it the most. Their dedication to transforming lives is truly inspiring.",
      author: "Yoga Guru Baba Ramdev",
      role: "Co-Founder, Patanjali Ayurved Ltd."
    },
    {
      text: "The massive scale at which Sevas Foundation operates, providing free surgeries and rehabilitation, sets a benchmark for service to humanity.",
      author: "Amit Shah",
      role: "Union Home Minister, Government of India"
    },
    {
      text: "Service to the differently-abled is service to God. Sevas Foundation's self-less efforts are bringing light and hope to thousands of families.",
      author: "Sri Sri Ravi Shankar",
      role: "Indian Guru and Spiritual Leader"
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">
          Voices of <span className="glowing-text">Support</span>
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '4rem'
        }}>
          {testimonials.map((t, i) => (
            <div key={i} className="glass" style={{
              padding: '3rem 2rem',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '2rem',
                fontSize: '4rem',
                color: 'var(--primary)',
                opacity: 0.5,
                lineHeight: 1,
                fontFamily: 'serif'
              }}>&quot;</div>
              
              <p style={{
                fontSize: '1.1rem',
                fontStyle: 'italic',
                lineHeight: 1.8,
                marginBottom: '2rem',
                color: 'rgba(255, 255, 255, 0.9)',
                position: 'relative',
                zIndex: 1
              }}>
                {t.text}
              </p>
              
              <div style={{
                borderTop: '1px solid var(--glass-border)',
                paddingTop: '1.5rem',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <span style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--foreground)' }}>
                  {t.author}
                </span>
                <span style={{ fontSize: '0.9rem', color: 'var(--secondary)' }}>
                  {t.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
