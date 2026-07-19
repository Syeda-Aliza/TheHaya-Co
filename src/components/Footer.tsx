import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container`}>
        <div className={styles.inner}>
          <div className={styles.column}>
            <h4>Shop</h4>
            <ul>
              <li><Link href="/collections/chiffon">Silk Chiffon</Link></li>
              <li><Link href="/collections/jersey">Premium Jersey</Link></li>
              <li><Link href="/collections/modal">Modal Cotton</Link></li>
              <li><Link href="/collections/all">All Hijabs</Link></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>About Haya&Co</h4>
            <ul>
              <li><Link href="/about">Our Story</Link></li>
              <li><Link href="/fabrics">Our Fabrics</Link></li>
              <li><Link href="/sustainability">Sustainability</Link></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>Support</h4>
            <ul>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/shipping">Shipping & Returns</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Haya&Co. Modest Wear. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
