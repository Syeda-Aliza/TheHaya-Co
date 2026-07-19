'use client';

import React, { useState } from 'react';
import styles from './contact.module.css';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate API call
    setSubmitted(true);
    setTimeout(() => {
      alert(`Thank you for contacting Haya&Co., ${formData.name}! We have received your message and will get back to you within 24 hours. 🌸`);
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 400);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Contact Haya&Co.</h1>
        <p className={styles.subtitle}>We would love to hear from you. Get in touch with our support team.</p>
      </header>

      <div className={styles.grid}>
        {/* Info Column */}
        <div className={styles.infoColumn}>
          <h2 className={styles.sectionTitle}>Get in Touch</h2>
          <p className={styles.infoText}>
            Whether you have a question about our premium fabrics, sizing, shipping, or need styling advice to find your perfect drape, our team is here to assist you.
          </p>

          <div className={styles.contactMethods}>
            <div className={styles.methodItem}>
              <span className={styles.methodIcon}>📧</span>
              <div>
                <p className={styles.methodLabel}>Email Us</p>
                <p className={styles.methodVal}>thehayaandco@gmail.com</p>
              </div>
            </div>

            <div className={styles.methodItem}>
              <span className={styles.methodIcon}>📸</span>
              <div>
                <p className={styles.methodLabel}>Instagram DM</p>
                <p className={styles.methodVal}>@thehaya&Co</p>
              </div>
            </div>

            <div className={styles.methodItem}>
              <span className={styles.methodIcon}>🕐</span>
              <div>
                <p className={styles.methodLabel}>Support Hours</p>
                <p className={styles.methodVal}>Monday – Saturday: 9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className={styles.formColumn}>
          <h2 className={styles.sectionTitle}>Send a Message</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.input}
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.input}
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                placeholder="Write your message here..."
                required
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>

            <button type="submit" className={styles.submitBtn} disabled={submitted}>
              {submitted ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
