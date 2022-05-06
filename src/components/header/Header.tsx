import React, { useEffect } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import Logo from "../../img/logo-header.svg";
import Browser from './Browser';
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { AiFillDelete, AiFillCloseCircle } from 'react-icons/ai';
import { useSelector } from "react-redux";
import { Product } from '../../types/product';
import { setRemoveProduct } from '../../actions/cart.actions';
import { useDispatch } from "react-redux";

const Header: React.FC = () => {
    const { width } = useWindowSize();
    const products = useSelector((store) => store.cartReducer.products);
    const [ showMenuProductos, setshowMenuProductos ] = React.useState<boolean>(false);
    const [ subtotal, setSubtotal ] = React.useState<number>(0);
    const dispatch = useDispatch();

    // Group the products objects by the id
    let groupBy = (array, key) => {
        return array.reduce((result, obj) => {
           (result[obj[key]] = result[obj[key]] || []).push(obj);
           return result;
        }, []);
    };

    let productsById = groupBy(products, "productId");

    let finalProducts = productsById.map((products) => {
        return {
            ...products[0],
            length: products.length,
            finalPrice: products[0].price * products.length
        }
    })

    let calculateSubtotal = () => {
        let cont = 0
        products.map((prod: Product) => cont += prod.price)
        setSubtotal(cont)
    }

    const removeProductFromCart = (product: Product) => dispatch(setRemoveProduct(product));

    const _renderProducts = finalProducts.map((product: Product) => {
        const { stars, productName, imageUrl, installments, price, listPrice } = product;
        return (
            <div key={Math.random()} className='product-rendered'>
                <div>
                    <img src={imageUrl} alt={"imágen de producto " + productName} />
                    <span>{product.productName} (x{product.length})</span>
                </div>
                <div>
                    <span>${product.finalPrice.toFixed(2)}</span>
                    <button name='remove-item-from-cart' className='remove-item' onClick={() => removeProductFromCart(product)}><AiFillDelete size={20} /></button>
                </div>
            </div>
        )
    })

    React.useEffect(() => {
        calculateSubtotal();
    }, [products])

    return (  
        <>
            <header>
                <div>
                    {width <= 768 && ( 
                        <GiHamburgerMenu size={24} />
                    )}
                    <img src={Logo} alt="logo de Corebiz"/>
                    {width >= 768 && (
                        <Browser />
                    )}
                    <div className='container-cart'>
                        <button name='open-products-cart' onClick={() => setshowMenuProductos(!showMenuProductos)}>
                            <HiOutlineShoppingCart size={24} />
                            {products.length > 0 &&
                                <span id='products-length'>{products.length}</span>
                            }
                        </button>
                        {width >= 768 && (
                            <IoPersonOutline size={24} /> 
                        )}
                    </div>
                    {width <= 768 && (
                        <Browser />
                    )}
                </div>
            </header>
            <div className='spacing'></div>
            <div 
                className="products-menu"
                style={{
                    display: showMenuProductos ? "block" : "none"
                }}
            >
                <span>Carrito</span>
                <button name="close-products-cart" id='close-products' onClick={() => setshowMenuProductos(false)}><AiFillCloseCircle size={24} /></button>
                <div className='list-products'>
                    {products.length > 0 ? _renderProducts : (
                        <span>No tienes productos agregados a tu carrito</span>
                    )}
                </div>
                <span id='subtotal'>Subtotal ${subtotal.toFixed(2)}</span>
            </div>
        </>
    );
}
 
export default Header;