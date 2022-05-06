import * as React from 'react';
import { Product } from '../../types/product';
import { AiFillStar, AiOutlineStar, AiOutlineCreditCard } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setAddProduct } from "../../actions/cart.actions";
import Button from '../Button';

interface ItemProps {
    item: Product
}

const _renderStars = (length: number, fill: boolean) => Array.apply(null, Array(length)).map(() => {
    return fill ? <AiFillStar key={Math.random()} color={"#EB5353"} /> : <AiOutlineStar key={Math.random()} color={"#EB5353"} />
})

const Item: React.FC<ItemProps> = ({ item }) => {
    const { stars, productName, imageUrl, installments, price, listPrice } = item;
    const initialStars: number = 5;
    const starsDifference: number = initialStars - stars
    const hasInstallments: {
        quantity: number,
        value: number
    } | null = installments.length > 0 ? installments[0] : null;
    const percentageDiscount: number | null = listPrice ? parseInt((100 - price / (listPrice / 100)).toFixed(0)) : null;
    const dispath = useDispatch();

    const addProductToCart = (product: Product) => {
        dispath(setAddProduct(product))
    }

    return React.useMemo(() => {
        return (  
            <div className='item'>
                {listPrice && 
                    <div className='percentageDiscount'>
                        <span>-{percentageDiscount}%</span>
                    </div>
                }
                <div className='container-img'>
                    <img 
                        src={imageUrl} 
                        alt={"Imágen del producto " + productName} 
                        title={"Imágen del producto " + productName} 
                    />
                </div>
                <span className='name' >{productName}</span>
                <div className='stars'>
                    {_renderStars(stars, true)}
                    {_renderStars(starsDifference, false)}
                </div>
                <div className='price-container'>
                    
                    <div className='price'>
                        <span className='list-price'>
                            {listPrice &&
                                <>
                                    ${listPrice.toFixed(2)}
                                </>
                            }
                        </span>
                        <span>
                            ${price.toFixed(2)}
                        </span>
                    </div>
                    <span className='installments'>
                        {hasInstallments && 
                            <>
                                <AiOutlineCreditCard/> x {hasInstallments.quantity} de ${hasInstallments.value}
                            </>
                        }
                    </span>
                </div>
                <Button 
                    title='Añadir al carrito' 
                    onClick={() => addProductToCart(item)}
                />
            </div>
        );
    }, [])
}
 
export default Item;