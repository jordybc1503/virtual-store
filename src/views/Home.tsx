
import styles from './Home.module.css';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ProducCard from '../components/ProductCart';
import products from '../assets/products'

function Home() {
  return (
    <>
      <NavBar />
      <Hero first={"tecnologia"} second={"renovada"}/>
      <main>
        <div className={styles["product-container"]} id="products">
          {
            products.map(each =>(
              <ProducCard
                key={each.id}
                id={each.id}
                title={each.title}
                price={each.price}
                color={each.colors[0]}
                image={each.images[0]}              
              />
            ))
          }
          
          
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;