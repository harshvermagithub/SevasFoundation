import Link from 'next/link';

export default function Header() {
  return (
    <header className="header-glass">
      <Link href="/" className="header-logo">
        Sevas <span className="glowing-text">Foundation</span>
      </Link>
      
      <nav className="header-nav">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="#about" className="nav-link">About Us</Link>
        <Link href="#services" className="nav-link">Services</Link>
        <Link href="#products" className="nav-link">Products</Link>
        <Link href="#contact" className="btn-primary nav-btn">Contact Us</Link>
      </nav>
    </header>
  );
}
