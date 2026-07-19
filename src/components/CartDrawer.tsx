'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useCart } from './CartContext';
import styles from './CartDrawer.module.css';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartTotal,
  } = useCart();

  const drawerRef = useRef<HTMLDivElement | null>(null);

  // Close drawer on escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCartOpen) {
        setIsCartOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCartOpen, setIsCartOpen]);

  // Prevent scroll when drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  const handleCheckout = () => {
    alert('Thank you for shopping with Haya&Co! This is a demo checkout page. 🌸');
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`${styles.overlay} ${isCartOpen ? styles.overlayOpen : ''}`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`${styles.drawer} ${isCartOpen ? styles.drawerOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping Cart"
      >
        <div className={styles.header}>
          <h3>Your Bag ({cart.reduce((total, item) => total + item.quantity, 0)})</h3>
          <button
            className={styles.closeBtn}
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className={styles.itemsArea}>
          {cart.length === 0 ? (
            <div className={styles.emptyState}>
              <span className={styles.emptyEmoji}>🌸</span>
              <p>Your bag is empty.</p>
              <button
                className="btn-primary styles.shopBtn"
                onClick={() => setIsCartOpen(false)}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className={styles.image}
                  />
                </div>
                <div className={styles.itemInfo}>
                  <div className={styles.itemHeader}>
                    <h4 className={styles.itemName}>{item.name}</h4>
                    <span className={styles.itemPrice}>
                      PKR {(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                  <div className={styles.itemControls}>
                    <div className={styles.quantitySelector}>
                      <button
                        className={styles.qtyBtn}
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className={styles.qtyVal}>{item.quantity}</span>
                      <button
                        className={styles.qtyBtn}
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <button
                      className={styles.removeBtn}
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Remove item"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span className={styles.totalPrice}>PKR {cartTotal.toLocaleString()}</span>
            </div>
            <button className={`btn-primary ${styles.checkoutBtn}`} onClick={handleCheckout}>
              Checkout
            </button>
            <p className={styles.shippingNote}>
              Free shipping on orders over PKR 2,000. Elegant signature gifting box included.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
