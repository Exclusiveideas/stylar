import React, { useRef, useState } from 'react';
import '@homestyles/miniCatalogue.css'
import expand from "@assets/expand_icon.svg";
import product_x from "@assets/product_x.png";
import product_y from "@assets/product_y.png";
import HomeMiniCat from './HomeMiniCat';

const CATS = [
    {
        color: "dust",
        title: "AO Henley Curve-Hem",
        price: 58,
        productImg: product_x,
        colors: ['#2E631B', '#2D5F8D', '#C0742E']
    },
    {
        color: "gray",
        title: "AO Curve-Hem Tee",
        price: 54,
        productImg: product_x,
        colors: ['#C0742E', '#592A88', '#2E631B', '#2D5F8D', '#8A1D1D']
    },
    {
        color: "gray",
        title: "AO Curve-Hem Tee",
        price: 54,
        productImg: product_y,
        colors: ['#8A1D1D', '#C0742E', '#592A88', '#2E631B']
    },
    {
        color: "gray",
        title: "AO Curve-Hem Tee",
        price: 54,
        productImg: product_x,
        colors: ['#2E631B', '#2D5F8D', '#C0742E']
    },
];

const MiniCatalogue = ({ catInfo }) => {
    const catRef = useRef();
    const [activeIndex, setActiveIndex] = useState(0)

    function scrollCat(dir) {
        const scrollOptions = {
            top: 0,
            left: dir == 'left' ? -200 : 200,
            behavior: "smooth",
        }

        catRef?.current?.scrollBy(scrollOptions)
    }

    return (
        <div className='miniCatalogue'>
            <div className="miniCatalogue_top">
                <p className="top_title">{catInfo?.title}</p>
                <div className="catalogue_cta_wrapper">
                    <p>{catInfo?.ctaTxt}</p>
                    <div className="filler_rect"></div>
                </div>
            </div>
            <div ref={catRef} className="miniCatalogue_catalogue">
                <div className="mincat_Cont">
                    {CATS?.map((cat, i) => (
                        <HomeMiniCat key={i} cat={cat} index={i} setActiveIndex={setActiveIndex} />
                    ))}
                </div>
            </div>
            <div style={{ visibility: activeIndex == 0 && 'hidden' }} className="left_scroll_btn scroll_btn" onClick={() => scrollCat('left')}>
                <img src={expand} alt="expand" className="expand_icon" />
            </div>
            <div style={{ visibility: activeIndex == (CATS?.length - 1) && 'hidden' }} className="right_scroll_btn scroll_btn" onClick={() => scrollCat('right')}>
                <img src={expand} alt="expand" className="expand_icon" />
            </div>
            <div className="curr_qss_items">
                {CATS?.map((_, i) => (
                    <div key={i} className={`curr_qss_item ${activeIndex == i && 'active_curr_qss_item'}`}></div>
                ))}
            </div>
        </div>
    )
}

export default MiniCatalogue
