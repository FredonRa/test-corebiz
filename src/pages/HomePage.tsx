import * as React from 'react';
import CarouselComponent from '../components/Banner';
import Header from '../components/header/Header';
import HomeServices from '../services/HomeServices';
import { Product } from '../types/product';
import ProductsCarousel from '../components/products/ProductsCarousel';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import OnLoad from '../components/OnLoad'

const HomePage: React.FC = () => {
    const [ products, setProducts ] = React.useState<Product[]>([])
    const [ isPending, setIsPending ] = React.useState<boolean>(true)

    const getProducts = async () => {
        try {
            const response = await HomeServices.getProducts();
            setProducts(response)
        } catch (err) {
            console.log(err)
        }
    }
  
    React.useEffect(() => {
        getProducts()
        setIsPending(false)
    }, [])

    if ( isPending ) return < OnLoad />

    return (  
        <>
            <Header />
            <main>
                <CarouselComponent />
                <ProductsCarousel items={products} />
                <Newsletter />
                <Footer />
            </main>
        </>
    );
}
 
export default HomePage;