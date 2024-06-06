import styles from './Thumbs.module.css';
import { useState, useEffect } from 'react';
export default function Thumbs({ product }) {
    const [thumb, setThumb] = useState(product.images[0] || "/mock1.jpg");
    useEffect(() => setThumb(product.images[0]), [product.id]);
    return (
        <section className={styles["product-images-block"]}>
            <div className={styles["product-images"]}>
                {product.images.map(each =>
                (<img
                    className={styles["mini-img"]}
                    key={each}
                    src={each}
                    alt={product.tittle}
                    onClick={() => setThumb(each)}
                />)
                )}

            </div>
            <img
                className={styles["big-img"]}
                id="big-img"
                src={thumb}
                alt={product.tittle}
            />
        </section>
    )
}