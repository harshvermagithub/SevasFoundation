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
      <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 800 }}>
        Sevas <span className="glowing-text">Foundation</span>
      </Link>
      
      <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link href="#about" style={{ fontWeight: 500 }}>About</Link>
        <Link href="#work" style={{ fontWeight: 500 }}>What We Do</Link>
        <Link href="#journey" style={{ fontWeight: 500 }}>Journey</Link>
        <Link href="#stories" style={{ fontWeight: 500 }}>Stories</Link>
        <Link href="#donate" className="btn-primary">Donate Now</Link>
      </nav>
    </header>
  );
}
