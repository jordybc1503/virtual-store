import styles from "./OnSaleCard.module.css"
import {Link} from "react-router-dom";
export default function OnSaleCard(props) {

    const { id, title, price, color, image, discount } = props;
    return (
        <Link className={styles["product-card"]} to={"/details/" + id} id={id}>
            <img
                className={styles["product-img"]}
                src={image}
                alt={title}
            />
            <div className={styles["product-info"]}>
                <span className={styles["product-title"]}>{title}</span>
                <span className={styles["product-description"]}>{color}</span>
                <div className={styles["product-price-block"]}>
                    <span className={styles["product-price"]}>Desde <s>{new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
}).format(price)}</s></span>
                </div>
                <div className={styles["product-price-block"]}>
                    <span className={styles["product-price-with-discount"]}>{new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
}).format(price*(1-discount))}</span>
                    <span className={styles["product-discount"]}>{(discount*100).toFixed(2)+"%"}</span>
                </div>
                <div className={styles["product-tax-policy"]}>
                    ¡Compra y pagá en pesos!
                </div>
            </div>
        </Link>
    );
}
