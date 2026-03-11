import Link from 'next/link';

export default function Header() {
  return (
    <header className="header-wrapper">
      <div className="top-header">
        <div className="top-header-links" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="https://wa.me/918884344199" className="top-link" target="_blank" rel="noreferrer">📱 WhatsApp: +91 88843 44199</a>
          <a href="tel:+918884344199" className="top-link">📞 Call: +91 88843 44199</a>
          <a href="mailto:sevasfoundationtrustbangalore@gmail.com" className="top-link">✉️ Email Us</a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input 
            type="text" 
            placeholder="Search..." 
            style={{ 
              padding: '0.3rem 0.8rem', 
              borderRadius: '20px', 
              border: 'none', 
              fontSize: '0.8rem',
              outline: 'none',
              width: '150px'
            }} 
          />
        </div>
      </div>
      <div className="header-glass">
        <Link href="/" className="header-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src="/logo_white.png" alt="Sevas Foundation Logo" style={{ height: '40px', width: 'auto' }} />
        <div>Sevas <span className="glowing-text">Foundation</span></div>
      </Link>
      
      <nav className="header-nav">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/about" className="nav-link">About</Link>
        <Link href="/services" className="nav-link">Services</Link>
        <Link href="/products" className="nav-link">Products</Link>
        
        <div className="dropdown">
          <Link href="/media" className="nav-link" style={{ cursor: 'pointer' }}>Media ▾</Link>
          <div className="dropdown-menu glass">
            <Link href="/media" className="dropdown-item">Image Gallery</Link>
            <Link href="/media" className="dropdown-item">Social Media</Link>
            <Link href="/media" className="dropdown-item">Events</Link>
          </div>
        </div>

        <div className="dropdown">
          <Link href="/highlights" className="nav-link" style={{ cursor: 'pointer' }}>Highlights ▾</Link>
          <div className="dropdown-menu glass">
            <Link href="/highlights" className="dropdown-item">Awards & Achievements</Link>
            <Link href="/highlights" className="dropdown-item">Success Stories</Link>
            <Link href="/highlights" className="dropdown-item">Testimonials</Link>
          </div>
        </div>

        <Link href="/contact" className="nav-link">Contact</Link>
        <Link href="/donate" className="btn-primary nav-btn" style={{ marginLeft: '1rem' }}>Donate Now</Link>
      </nav>
      </div>
    </header>
  );
}
