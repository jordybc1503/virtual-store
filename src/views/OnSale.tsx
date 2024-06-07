import styles from './OnSale.module.css';
import NavBar from '../components/NavBar';

import Footer from '../components/Footer';
import OnSaleCard from '../components/OnSaleCard';
import products from '../assets/products';

function OnSale() {
  return (
    <>
      <NavBar isHome={false}/>
      
      <main>
        <div className={styles["product-container"]} id="products">
          {
            products.filter(e=>e.onsale === true).map(each =>(
              <OnSaleCard
                key={each.id}
                id={each.id}
                title={each.title}
                price={each.price}
                color={each.colors[0]}
                image={each.images[0]} 
                discount={each.discount}

              />
            ))
          }
          
          
        </div>
      </main>
      <Footer />
    </>
  );
}

export default OnSale;