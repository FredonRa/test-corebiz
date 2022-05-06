import React, { useEffect } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import Logo from "../../img/logo-header.svg";
import Browser from './Browser';
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Product } from '../../types/product';

const Header: React.FC = () => {
    const { width } = useWindowSize();
    const products = useSelector((store) => store.cartReducer.products);
    const [ showMenuProductos, setshowMenuProductos ] = React.useState<boolean>(false)

    const _renderProducts = products.map((product: Product) => {
        const { stars, productName, imageUrl, installments, price, listPrice } = product;
        return (
            <div key={Math.random()} className='product-rendered'>
                <div>
                    <img src={imageUrl} alt={"imágen de producto " + productName} />
                    <span>{product.productName}</span>
                </div>
                <div>
                    <span>${product.price}</span>
                    <button>X</button>
                </div>
            </div>
        )
    })

    return (  
        <>
            <header>
                {width <= 768 ? (
                    <>  
                        <GiHamburgerMenu size={24} />
                        <img src={Logo} />
                        <button onClick={() => setshowMenuProductos(!showMenuProductos)}>
                            <HiOutlineShoppingCart size={24} />
                            {products.length > 0 &&
                                <span>{products.length}</span>
                            }
                        </button>
                        <Browser />
                    </>
                ) : (
                    <>
                        <img src={Logo} />
                        <Browser />
                        

                        <IoPersonOutline /> 
                    </>
                )}
                
            </header>
            <div className='spacing'></div>
            {showMenuProductos && 
                <div className="products-menu">
                    <span>Tus productos</span>
                    <div className='list-products'>
                        {_renderProducts}
                    </div>
                </div>
            }
        </>
    );
}
 
export default Header;