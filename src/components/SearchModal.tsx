'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCart } from './CartContext';
import styles from './SearchModal.module.css';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Luxury Silk Chiffon Hijab",
    price: 790.00,
    image: "/a3ed3d43-8513-4f3f-b9db-d0e407272c41.webp",
    category: "chiffon",
  },
  {
    id: 2,
    name: "Premium Cotton Jersey Hijab",
    price: 800.00,
    image: "/s-l1200.jpg",
    category: "jersey",
  },
  {
    id: 3,
    name: "Soft Modal Cotton Hijab",
    price: 600.00,
    image: "/images.jpg",
    category: "modal",
  },
];

const POPULAR_SEARCHES = ["Chiffon", "Jersey", "Modal", "Silk", "Cotton"];

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen } = useCart();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  // Focus input when modal opens
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setResults([]);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSearchOpen]);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  // Handle live search
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const filtered = PRODUCTS.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, [query]);

  const handleResultClick = (productId: number) => {
    setIsSearchOpen(false);
    router.push(`/products/${productId}`);
  };

  const handleTagClick = (tag: string) => {
    setQuery(tag);
  };

  return (
    <div
      className={`${styles.overlay} ${isSearchOpen ? styles.overlayOpen : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Search store"
    >
      <div className={styles.header}>
        <button
          className={styles.closeBtn}
          onClick={() => setIsSearchOpen(false)}
          aria-label="Close search"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.searchForm}>
          <svg
            className={styles.searchIcon}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            ref={inputRef}
            type="text"
            className={styles.input}
            placeholder="Search our collection..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {results.length > 0 ? (
          <div className={styles.results}>
            <h4>Products Found ({results.length})</h4>
            <div className={styles.resultsList}>
              {results.map((product) => (
                <div
                  key={product.id}
                  className={styles.resultItem}
                  onClick={() => handleResultClick(product.id)}
                >
                  <div className={styles.resultImageWrapper}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className={styles.resultImage}
                    />
                  </div>
                  <div className={styles.resultDetails}>
                    <span className={styles.resultName}>{product.name}</span>
                    <span className={styles.resultPrice}>PKR {product.price.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : query.trim() ? (
          <div className={styles.noResults}>
            No products found for "{query}". Try looking for silk, jersey, or modal! 🌸
          </div>
        ) : (
          <div className={styles.suggestions}>
            <h4>Suggested Searches</h4>
            <div className={styles.tagList}>
              {POPULAR_SEARCHES.map((search) => (
                <button
                  key={search}
                  className={styles.tag}
                  onClick={() => handleTagClick(search)}
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
