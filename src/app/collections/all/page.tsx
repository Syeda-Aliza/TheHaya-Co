'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '../../../components/CartContext';
import styles from './collections.module.css';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  color: string;
  description: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Luxury Silk Chiffon Hijab",
    price: 790,
    image: "/a3ed3d43-8513-4f3f-b9db-d0e407272c41.webp",
    category: "silk chiffon",
    color: "Grape Purple",
    description: "Ultra-lightweight and breathable silk chiffon with an elegant sheer finish.",
  },
  {
    id: 2,
    name: "Premium Cotton Jersey Hijab",
    price: 800,
    image: "/s-l1200.jpg",
    category: "cotton jersey",
    color: "Muted Lilac",
    description: "Medium-weight stretchy cotton jersey, perfect for everyday comfort and styling.",
  },
  {
    id: 3,
    name: "Soft Modal Cotton Hijab",
    price: 600,
    image: "/images.jpg",
    category: "modal cotton",
    color: "Dusty Rose",
    description: "Silky-soft organic modal blended with fine cotton for a beautiful flowing drape.",
  },
];

const CATEGORIES = ["all", "silk chiffon", "cotton jersey", "modal cotton"];

export default function CollectionsAllPage() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  const formatCategoryName = (name: string) => {
    if (name === 'all') return 'All Fabrics';
    return name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>The Hijab Collection</h1>
        <p className={styles.subtitle}>Elegantly draped modesty in our signature premium fabrics</p>
      </header>

      <div className={styles.filters}>
        {CATEGORIES.map((category) => (
          <button
            key={category}
            className={`${styles.filterBtn} ${selectedCategory === category ? styles.filterBtnActive : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {formatCategoryName(category)}
          </button>
        ))}
      </div>

      <main className={styles.grid}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={product.image}
                alt={`${product.name} in ${product.color}`}
                fill
                priority={product.id === 1}
                className={styles.image}
              />
              <span className={styles.colorBadge}>🧵 {product.color}</span>
            </div>
            <div className={styles.productInfo}>
              <h3 className={styles.productTitle}>{product.name}</h3>
              <p className={styles.productDescription}>{product.description}</p>
              <p className={styles.productPrice}>PKR {product.price.toLocaleString()}</p>
              <button
                className={`btn-primary ${styles.addToCartBtn}`}
                onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
              >
                Add to Bag
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
