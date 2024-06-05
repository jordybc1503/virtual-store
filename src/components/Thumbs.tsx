import styles from './Thumbs.module.css';
export default function Thumbs({product}){
    return (
        <section className={styles["product-images-block"]}>
        <div className={styles["product-images"]}>
            {product.images.map(e =>
            (<img
                className={styles["mini-img"]}
                src={e}
                alt={product.tittle}
            />)
            )}

        </div>
        <img
            className={styles["big-img"]}
            id="big-img"
            src={product.images[0]}
            alt={product.tittle}
        />
    </section>
    )
}