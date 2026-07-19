import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Luxury Silk Chiffon Hijab",
      price: "PKR 790",
      image: "/a3ed3d43-8513-4f3f-b9db-d0e407272c41.webp",
      color: "Grape Purple",
    },
    {
      id: 2,
      name: "Premium Cotton Jersey Hijab",
      price: "PKR 800",
      image: "/s-l1200.jpg",
      color: "Muted Lilac",
    },
    {
      id: 3,
      name: "Soft Modal Cotton Hijab",
      price: "PKR 600",
      image: "/images.jpg",
      color: "Dusty Rose",
    },
  ];

  return (
    <>
      <section className={styles.hero}>
        <Image
          src="/hero.png"
          alt="Haya&Co - Modest Hijab Collection"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Elegant Modesty.</h1>
          <p className={styles.heroSubtitle}>
            Discover premium hijabs crafted from the finest silk, jersey, and organic modal fabrics.
          </p>
          <Link href="/collections/all" className="btn-primary">
            Shop the Collection
          </Link>
        </div>
      </section>

      <section className={`${styles.section} container`}>
        <h2 className={styles.sectionTitle}>Bestsellers</h2>
        <div className={styles.productGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <Link href={`/products/${product.id}`}>
                <div className={styles.productImageWrapper}>
                  <Image
                    src={product.image}
                    alt={`${product.name} in ${product.color}`}
                    fill
                    className={styles.productImage}
                  />
                </div>
                <div className={styles.productInfo}>
                  <h3 className={styles.productTitle}>{product.name}</h3>
                  <p className={styles.productColor}>🧵 {product.color}</p>
                  <p className={styles.productPrice}>{product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
