import styles from "./ProductCard.module.css"
import {Link} from "react-router-dom";
export default function ProducCard(props) {

    const { id, tittle, price, color, image } = props;
    return (
        <Link className={styles["product-card"]} to={"/details/" + id} id={id}>
            <img
                className={styles["product-img"]}
                src={image}
                alt={tittle}
            />
            <div className={styles["product-info"]}>
                <span className={styles["product-title"]}>{tittle}</span>
                <span className={styles["product-description"]}>{color}</span>
                <div className={styles["product-price-block"]}>
                    <span className={styles["product-price"]}>{price}</span>
                    <span className={styles["product-discount"]}>50% Off</span>
                </div>
                <div className={styles["product-tax-policy"]}>
                    Incluye impuesto País y percepción AFIP
                </div>
            </div>
        </Link>
    );
}

