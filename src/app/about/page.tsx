import React from 'react';
import Link from 'next/link';
import styles from './about.module.css';

export const metadata = {
  title: "About Us | Haya&Co.",
  description: "Founded with a passion for blending timeless modesty with modern elegance, Haya&Co. was born from a desire to empower women to feel beautiful and confident.",
};

export default function AboutPage() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>About Haya&Co.</h1>
          <p className={styles.subtitle}>Elegantly Draped, Effortlessly Breathable.</p>
        </header>

        <div className={styles.grid}>
          <div className={styles.textSide}>
            <div className={styles.cardContainer}>
              {/* Card 1: Our Origin */}
              <div className={styles.card}>
                <div className={styles.iconWrapper}>
                  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <h2 className={styles.cardTitle}>Our Origin</h2>
                <p className={styles.cardText}>
                  Founded with a passion for blending timeless modesty with modern elegance, Haya&Co. was born from a desire to empower women to feel beautiful and confident in sophisticated, curated wear.
                </p>
              </div>

              {/* Card 2: Our Mission */}
              <div className={styles.card}>
                <div className={styles.iconWrapper}>
                  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 22s13.78-2.18 17.75-8.56C21.8 9.94 21.57 4 21.57 4s-5.83.2-9.4 3.75C5.78 14.12 2 22 2 22z"></path>
                    <path d="M12 8.5V22"></path>
                  </svg>
                </div>
                <h2 className={styles.cardTitle}>Our Mission</h2>
                <p className={styles.cardText}>
                  We are dedicated to crafting exceptional modest clothing using premium fabrics, ensuring unparalleled quality, comfort, and style while honoring personal expression and grace.
                </p>
              </div>

              {/* Card 3: Our Values */}
              <div className={styles.card}>
                <div className={styles.iconWrapper}>
                  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a3 3 0 0 1 3 3c0 .85-.35 1.62-.92 2.16L21.2 13.5a1.5 1.5 0 0 1-.92 2.5H3.72a1.5 1.5 0 0 1-.92-2.5l7.12-6.34c-.57-.54-.92-1.31-.92-2.16A3 3 0 0 1 12 2z" />
                  </svg>
                </div>
                <h2 className={styles.cardTitle}>Our Values</h2>
                <p className={styles.cardText}>
                  Quality, Authenticity, Modesty, Elegance. We uphold craftsmanship, ethical practices, and the beauty of modest fashion in every design.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.imageSide}>
            <div className={styles.imageWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/about-model.png"
                alt="Haya&Co Premium Hijab Model"
                className={styles.image}
              />
            </div>
          </div>
        </div>

        <p className={styles.inviteText}>
          We are so glad you are here. We invite you to explore our <Link href="/collections/all" className={styles.collectionsBtn}>Collections</Link> and find your new everyday staple. Welcome to the Haya&Co family. 🌸
        </p>
      </div>
    </div>
  );
}
