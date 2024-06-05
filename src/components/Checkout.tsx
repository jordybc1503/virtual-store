import styles from './Checkout.module.css';
import { useState } from 'react';

export default function Checkout({product}){
    const [quantity, setQuantity] = useState(1);

    return (<div className={styles["product-checkout-block"]}>
    <div className={styles["checkout-container"]}>
        <span className={styles["checkout-total-label"]}>Total:</span>
        <h2 id="price" className={styles["checkout-total-price"]}>
            $ {(product.price * quantity).toLocaleString()}
        </h2>
        <p className={styles["checkout-description"]}>
            Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
            50711 haciendo la solicitud en AFIP.
        </p>
        <ul className={styles["checkout-policy-list"]}>
            <li>
                <span className={styles["policy-icon"]}
                ><img src="./assets/truck.png" alt="Truck"
                    /></span>
                <span className={styles["policy-desc"]}
                >Agrega el producto al carrito para conocer los costos de
                    envío</span
                >
            </li>
            <li>
                <span className={styles["policy-icon"]}
                ><img src='../assets/plane.png' alt="Plane"
                    /></span>
                <span className={styles["policy-desc"]}>
                    Recibí aproximadamente entre 10 y 15 días hábiles,
                    seleccionando envío normal
                </span>
            </li>
        </ul>
        <div className={styles["checkout-process"]}>
            <div className={styles["top"]}>
                <input 
                    type="number" 
                    min="1" 
                    defaultValue={quantity}
                    onChange={(event) => setQuantity(Number(event?.target.value))}
                    />
                <button type="button" className={styles["cart-btn"]}>
                    Añadir al Carrito
                </button>
            </div>
        </div>
    </div>
</div>)
}