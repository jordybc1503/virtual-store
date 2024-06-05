import styles from "./NotFound.module.css";
import NavBar from '../components/NavBar';
//import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Cart() {

    return (
        <>
            <NavBar />            
            <Hero first={"404"} second={"not found"}/>
            <main>
                
            </main>
            <Footer />
        </>
    )
}