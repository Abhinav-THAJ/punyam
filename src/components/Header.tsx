"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, User, Menu, X } from "lucide-react";
import CartIcon from "./CartIcon";
import styles from "./components.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/logo.png" alt="Punyam Store" />
          </Link>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul>
            <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link href="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
            
            <li className={styles.dropdown}>
              <span className={styles.dropdownToggle}>Astrology ▾</span>
              <ul className={styles.dropdownMenu}>
                <li><Link href="/astrology/premium" onClick={() => setIsMenuOpen(false)}>Premium Daily Astrology</Link></li>
                <li><Link href="/astrology/instant-report" onClick={() => setIsMenuOpen(false)}>Instant Astro Report</Link></li>
                <li><Link href="/consultation" onClick={() => setIsMenuOpen(false)}>Book Consultation</Link></li>
                <li><Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>My Dashboard</Link></li>
              </ul>
            </li>
            
            <li><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <div className={styles.headerIcons}>
            <button><Search size={20} /></button>
            <button><User size={20} /></button>
            <CartIcon />
          </div>
          <Link href="/login" className="btn btn-primary" style={{ marginLeft: '15px', padding: '8px 16px', fontSize: '14px' }}>Login / Register</Link>
          <button 
            className={styles.menuToggle} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
