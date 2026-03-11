import Link from 'next/link';

export default function Header() {
  return (
    <header className="header-glass">
      <Link href="/" className="header-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src="/logo_white.png" alt="Sevas Foundation Logo" style={{ height: '40px', width: 'auto' }} />
        <div>Sevas <span className="glowing-text">Foundation</span></div>
      </Link>
      
      <nav className="header-nav">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/about" className="nav-link">About Us</Link>
        <Link href="/services" className="nav-link">Services</Link>
        <Link href="/products" className="nav-link">Products</Link>
        <Link href="#contact" className="nav-link">Contact Us</Link>
        <Link href="#donate" className="btn-primary nav-btn" style={{ marginLeft: '1rem' }}>Donate Now</Link>
      </nav>
    </header>
  );
}
