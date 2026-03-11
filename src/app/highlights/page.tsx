"use client";
import React, { useState } from 'react';

export default function HighlightsPage() {
  const [activeTab, setActiveTab] = useState('achievements');

  const tabs = [
    { id: 'achievements', label: 'Achievements' },
    { id: 'awards', label: 'Awards' },
    { id: 'stories', label: 'Success Stories' },
    { id: 'updates', label: 'Latest Updates' },
    { id: 'testimonials', label: 'Donor Testimonials' }
  ];

  return (
    <div className="page-content" style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <div className="container" style={{ padding: '4rem 2rem' }}>
        <h1 className="section-title">Foundation <span className="glowing-text">Highlights</span></h1>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={activeTab === tab.id ? 'btn-primary' : 'btn-outline'}
              style={{ border: activeTab === tab.id ? 'none' : '1px solid var(--glass-border)', padding: '0.75rem 1.5rem', borderRadius: '2rem', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem' }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="glass" style={{ padding: '3rem', minHeight: '400px', background: 'var(--glass-bg)' }}>
          {activeTab === 'achievements' && (
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ color: 'var(--primary)', marginBottom: '3rem' }}>Milestones Reached</h2>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                <div style={{ background: '#fff', padding: '2rem', borderRadius: '12px', minWidth: '200px', border: '1px solid var(--glass-border)' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)' }}>4,52,065</div>
                  <div style={{ color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.9rem', marginTop: '0.5rem' }}>Corrective Surgeries</div>
                </div>
                <div style={{ background: '#fff', padding: '2rem', borderRadius: '12px', minWidth: '200px', border: '1px solid var(--glass-border)' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)' }}>3,97,833</div>
                  <div style={{ color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.9rem', marginTop: '0.5rem' }}>Callipers Distributed</div>
                </div>
                <div style={{ background: '#fff', padding: '2rem', borderRadius: '12px', minWidth: '200px', border: '1px solid var(--glass-border)' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--accent)' }}>39,388</div>
                  <div style={{ color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.9rem', marginTop: '0.5rem' }}>Artificial Limbs</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'awards' && (
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ color: 'var(--secondary)', marginBottom: '2rem' }}>Recognitions & Awards</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
                <div className="glass" style={{ padding: '1.5rem', background: 'var(--light-orange)' }}>
                  <h3 style={{ color: 'var(--foreground)' }}>National Award for Divyang Empowerment</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Received from the President of India for our stellar, relentless efforts in providing free artificial limbs across Karnataka and beyond.</p>
                </div>
                <div className="glass" style={{ padding: '1.5rem', background: '#fff' }}>
                  <h3 style={{ color: 'var(--foreground)' }}>Best NGO Healthcare Initiative 2024</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Recognized by the Health Ministry for maintaining state-of-the-art prosthetic fabrication labs that adhere to global WHO standards.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'stories' && (
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
              <h2 style={{ color: 'var(--accent)', marginBottom: '2rem', textAlign: 'center' }}>Stories of Resilience</h2>
              
              <div className="glass" style={{ padding: '2rem', marginBottom: '1.5rem', background: '#fff' }}>
                 <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Umang&apos;s Journey to Independence</h3>
                 <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Umang faced extraordinary difficulty from birth with differences in his right hand and left leg. Living in a rural village, his mobility was severely restricted until he visited our Sevas camp. Our orthotics engineers took custom measurements and fitted Umang with an advanced dynamic prosthesis, granting him the ability to walk to school unassisted for the first time in his life.</p>
              </div>

              <div className="glass" style={{ padding: '2rem', background: '#fff' }}>
                 <h3 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>Akshay&apos;s Second Chance</h3>
                 <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Following a devastating train collision, Akshay suffered an above-knee amputation that shattered his dreams. The sheer mental toll coupled with the financial crisis was overwhelming. Thanks to generous donors, Sevas Foundation fitted Akshay with a high-activity pneumatic knee joint prosthesis completely free of cost. He has now safely returned to his job and supports his family independently.</p>
              </div>
            </div>
          )}

          {activeTab === 'updates' && (
             <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
               <h2 style={{ color: 'var(--primary)', marginBottom: '2rem', textAlign: 'center' }}>Latest Updates</h2>
               <div className="glass" style={{ padding: '1.5rem', marginBottom: '1rem', background: '#fff' }}>
                 <strong style={{ color: 'var(--text-muted)' }}>March 2026</strong>
                 <p style={{ color: 'var(--foreground)' }}>We have successfully imported a new batch of 3D-Scannable socket mapping technologies to reduce wait times at our Bangalore center!</p>
               </div>
               <div className="glass" style={{ padding: '1.5rem', background: '#fff' }}>
                 <strong style={{ color: 'var(--text-muted)' }}>February 2026</strong>
                 <p style={{ color: 'var(--foreground)' }}>Partnered with local grassroots organizations to extend our free diagnostic and preliminary measurement camps into Northern Karnataka.</p>
               </div>
             </div>
          )}

          {activeTab === 'testimonials' && (
             <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
               <h2 style={{ color: 'var(--secondary)', marginBottom: '2rem' }}>What Our Donors Say</h2>
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                 <div className="glass" style={{ padding: '2rem', background: 'var(--light-orange)', fontStyle: 'italic' }}>
                   &quot;I was completely blown away by the level of modernization and care at the facility. Knowing my funds provided a young girl with a custom myo-electric arm is the greatest joy of my life.&quot;
                   <div style={{ marginTop: '1rem', fontWeight: 'bold', color: 'var(--foreground)', fontStyle: 'normal' }}>- Rajesh K., Philanthropist</div>
                 </div>
                 <div className="glass" style={{ padding: '2rem', background: 'var(--glass-bg)', fontStyle: 'italic' }}>
                   &quot;Sevas Foundation&apos;s transparency and strict adherence to updates on the beneficiaries&apos; journey gives our corporate CSR team total confidence.&quot;
                   <div style={{ marginTop: '1rem', fontWeight: 'bold', color: 'var(--foreground)', fontStyle: 'normal' }}>- Sunita M., Corporate Partner</div>
                 </div>
               </div>
             </div>
          )}

        </div>
      </div>
    </div>
  );
}
