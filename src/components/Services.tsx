'use client';

import { useState } from 'react';

const serviceCategories = [
  {
    title: "Artificial Limbs & Rehabilitation",
    image: "/media/About/WhatsApp Image 2026-03-15 at 16.07.57 (1).jpeg",
    details: [
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
    ]
  },
  {
    title: "Education Support",
    image: "/media/education_bg.jpg",
    details: [
      "Book and Stationery Distribution in various schools",
      "School Bag distributions for underprivileged students",
      "Scholarships & Educational Sponsorships",
      "Mentorship and Career Guidance Programs"
    ]
  },
  {
    title: "Anna Daan & Feeding",
    image: "/media/anna_daan_feeding.png",
    details: [
      "Daily feeding programs for the needy",
      "Special food distribution drives during festivals",
      "Nutrition support for pregnant women and children",
      "Emergency food relief during natural calamities"
    ]
  },
  {
    title: "Goshala Sevas",
    image: "/media/About/WhatsApp Image 2026-03-15 at 16.07.59 (1).jpeg",
    details: [
      "Support and maintenance of cow shelters",
      "Fodder and medical care for rescued animals",
      "Organizing regular Goshala visits and awareness camps",
      "Promotion of cruelty-free living and animal protection"
    ]
  },
  {
    title: "Community & Poverty Support",
    image: "/media/About/WhatsApp Image 2026-03-21 at 12.15.12 (1).jpeg",
    details: [
      "Blanket and clothing distribution drives during winters",
      "Health and hygiene camps for rural areas",
      "Women empowerment and skill development programs",
      "Financial assistance for critical medical emergencies"
    ]
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section id="services" className="section" style={{ background: 'var(--light-orange)' }}>
      <div className="container">
        <h2 className="section-title">
          Our <span className="glowing-text">Services & Sevas</span>
        </h2>
        <p style={{
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '1.2rem',
          maxWidth: '800px',
          margin: '0 auto 3rem',
          lineHeight: 1.6
        }}>
          We provide a comprehensive range of NGO services and clinical rehabilitation tailored to uplift and empower individuals. Click on any service below to learn more.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', marginBottom: '4rem' }}>
          {serviceCategories.map((service, index) => (
            <div 
              key={index} 
              className="glass"
              onClick={() => setSelectedService(selectedService === index ? null : index)}
              style={{
                width: '300px',
                cursor: 'pointer',
                overflow: 'hidden',
                borderRadius: '16px',
                border: selectedService === index ? '2px solid var(--primary)' : '1px solid var(--glass-border)',
                transform: selectedService === index ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: selectedService === index ? '0 12px 40px rgba(0,0,0,0.15)' : '0 8px 32px 0 rgba(0, 0, 0, 0.05)'
              }}
            >
              <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.5rem', textAlign: 'center', flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h3 style={{ color: 'var(--primary)', margin: 0, fontSize: '1.2rem' }}>{service.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {selectedService !== null && (
          <div className="glass" style={{ padding: '3rem', borderRadius: '24px', animation: 'fadeIn 0.5s ease-in-out' }}>
            <h3 style={{ color: 'var(--secondary)', marginBottom: '2rem', fontSize: '1.8rem', textAlign: 'center' }}>
              {serviceCategories[selectedService].title} Details
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {serviceCategories[selectedService].details.map((detail, idx) => (
                <div key={idx} style={{ padding: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem', background: 'rgba(255,255,255,0.5)', borderRadius: '12px' }}>
                  <span style={{ color: 'var(--primary)', fontSize: '1.2rem', marginTop: '0.2rem' }}>✦</span>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
