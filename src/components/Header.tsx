import Link from 'next/link';

export default function Header() {
  return (
    <header className="glass" style={{
      position: 'fixed',
      top: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '1200px',
      zIndex: 1000,
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <Link href="/" style={{ fontSize: '1.2rem', fontWeight: 800 }}>
        Hi-Tech <span className="glowing-text">Artificial Limbs</span> Center
      </Link>
      
      <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link href="/" style={{ fontWeight: 500 }}>Home</Link>
        <Link href="#about" style={{ fontWeight: 500 }}>About Us</Link>
        <Link href="#services" style={{ fontWeight: 500 }}>Services</Link>
        <Link href="#products" style={{ fontWeight: 500 }}>Products</Link>
        <Link href="#contact" className="btn-primary">Contact Us</Link>
      </nav>
    </header>
  );
}
