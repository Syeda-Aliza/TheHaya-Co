'use client';

import Link from 'next/link';
import { useCart } from './CartContext';
import styles from './Header.module.css';

export default function Header() {
  const { setIsCartOpen, setIsSearchOpen, cartCount } = useCart();

  return (
    <header className={`${styles.header} glass`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          Haya&Co.
        </Link>
        <nav className={styles.nav}>
          <Link href="/collections/all" className={styles.navLink}>Shop</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </nav>
        <div className={styles.actions}>
          <button
            className={styles.iconBtn}
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button
            className={styles.iconBtn}
            onClick={() => setIsCartOpen(true)}
            aria-label="Cart"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}
