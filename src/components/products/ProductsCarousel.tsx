import * as React from 'react';
import Item from './Item';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";import useWindowSize from '../../hooks/useWindowSize';
import { Product } from '../../types/product';

interface ProductsCarouselProps {
    items: Product[]
}

const ProductsCarousel: React.FC<ProductsCarouselProps> = ({ items } ) => {
    const [ activeItemIndex, setActiveItemIndex ] = React.useState<number>(0);

    const _renderItems = items.map((item) => {
        return (
            <Item key={Math.random()} item={item} />
        )
    }); 

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
        ],
        afterChange: (index: number) => (
            setActiveItemIndex(index)
        ),
        appendDots: (dots: React.ReactNode) => (
            <div
              style={{
                borderRadius: "10px",
                padding: "5px",
                position: "inherit"
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i: number) => (
            <div
                style={{
                    width: "8px",
                    height: "8px",
                    background: activeItemIndex == i ? "#EB5353" : "#BDBDBD",
                    border: "solid 1px",
                    borderColor: activeItemIndex == i ? "#EB5353" : "#BDBDBD",
                    borderRadius: "50%"
                }}
            ></div>
          )
      };
    
    return (  
      <article id='carousel-products'>
        <h2>Más vendidos <span className='line'></span></h2>
        <Slider 
        {...settings}
        >
            {_renderItems}
        </Slider>
      </article>
    );
}
 
export default ProductsCarousel;