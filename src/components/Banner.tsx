import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import useWindowSize from '../hooks/useWindowSize';
import FotoMobile from "../img/foto-mobile.png"
import FotoDesktop from "../img/foto-desktop.png"

type item = {
    desktop: string,
    mobile: string
}

const items: item[] = [
    {
        desktop: FotoDesktop,
        mobile: FotoMobile
    },
    {
        desktop: FotoDesktop,
        mobile: FotoMobile
    },
    {
        desktop: FotoDesktop,
        mobile: FotoMobile
    },
    {
        desktop: FotoDesktop,
        mobile: FotoMobile
    },
]


const Banner = () => {
    const [ activeItemIndex, setActiveItemIndex ] = React.useState<number>(0);
    const { width } = useWindowSize();

    const _renderItems = items.map((item) => {
        const { mobile, desktop } = item;
        return (
            <div key={Math.random()}>
                <img src={width <= 768 ? mobile : desktop} />
            </div>
        )
    }); 

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
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
        <article id='banner'>
            <Slider 
            {...settings}
            >
                {_renderItems}
            </Slider>
        </article>
    );
}
 
export default Banner;