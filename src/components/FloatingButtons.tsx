
import React from 'react';

export default function FloatingButtons() {
  return (
    <>
      <div className="floating-container-left">
        <a 
          href="mailto:sevasfoundationtrustbangalore@gmail.com" 
          className="floating-btn btn-email" 
          title="Email Us"
        >
          ✉️ <span>Email Us</span>
        </a>
      </div>

      <div className="floating-container-right">
        <a 
          href="https://wa.me/918884344199" 
          className="floating-btn btn-whatsapp" 
          target="_blank" 
          rel="noreferrer"
          title="WhatsApp Us"
        >
          📱
        </a>
        <a 
          href="tel:+918884344199" 
          className="floating-btn btn-call" 
          title="Call Us"
        >
          📞
        </a>
      </div>
    </>
  );
}
