export default function LimbsInfo() {
  return (
    <section className="section" style={{ background: 'var(--background)' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
          <div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              Restoring <span className="glowing-text">Mobility & Hope</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Accidents are unexpected and can change lives drastically. When a person loses a limb in an accident, their entire life turns upside down. They feel like they have come to a standstill and tend to lose hope. Their situation can be significantly improved with the help of artificial limbs, but not everyone can afford the cost of a prosthetic leg or arm in India.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '2rem' }}>
              There are several specially abled individuals and amputation survivors who struggle to get mobility aids that can help them navigate their lives, often due to a lack of means, access, or resources. Sevas Foundation Trust is dedicated to providing those in need with the resources they need to regain their mobility and the confidence to lead a normal, fulfilling life—completely free of cost.
            </p>
            <div style={{
              marginTop: '2rem',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 8px 32px 0 rgba(0,0,0,0.1)',
              border: '2px solid var(--glass-border)'
            }}>
              <img src="/limb.png" alt="Advanced Artificial Limb Being Fitted" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>

          <div className="glass" style={{ padding: '2rem', background: 'var(--light-orange)', border: '1px solid var(--glass-border)' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontSize: '1.4rem' }}>Our Manufacturing Excellence</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
              We have established a highly modernised manufacturing centre for artificial limbs, where specially-abled individuals from marginalized sections of society can receive comprehensive rehabilitation and custom-fitted appliances completely free of cost.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
              Our dedicated team of specialised prosthetics and orthotics experts takes exact, careful measurements to ensure that every single prosthetic arm or leg manufactured at our facility offers a perfect, comfortable fit for the beneficiary.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
              Beyond just providing the limb, we are committed to full rehabilitation. Beneficiaries receive absolute, unwavering assistance and support from our specialists to help them get wholly accustomed to the functionality and usage of their new artificial limbs.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', padding: '3rem', background: 'var(--glass-bg)', borderRadius: '16px', boxShadow: '0 8px 32px 0 rgba(0,0,0,0.05)', border: '1px solid var(--glass-border)' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--foreground)' }}>Make a Difference Today</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
            A basic prosthetic leg cost in India might be way more for the economically weaker sections. If you are looking for a way to give back to society, your donation can help underprivileged families and individuals regain control of their lives.
          </p>
          <a href="#donate" className="btn-primary" style={{ fontSize: '1.3rem', padding: '1rem 3rem' }}>
            Donate Now
          </a>
        </div>

      </div>
    </section>
  );
}
