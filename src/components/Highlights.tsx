import React from 'react';

export default function Highlights() {
  const highlights = [
    { number: "25,000+", label: "Limb Transplants" },
    { number: "50,000+", label: "Corrective Surgeries" },
    { number: "100,000+", label: "Families Empowered" },
    { number: "Award", label: "National Award for Excellence 2023" }
  ];

  return (
    <div style={{ background: 'var(--primary)', padding: '2rem 1rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
       {highlights.map((h, i) => (
         <div key={i} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '2rem', fontWeight: 900, color: '#fff', marginBottom: '0.2rem' }}>{h.number}</span>
            <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{h.label}</span>
         </div>
       ))}
    </div>
  )
}
