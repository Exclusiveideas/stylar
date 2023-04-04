import React, { useEffect, useRef, useState } from 'react';
import '@productsstyles/quickShopSect.css';
import product_x from "@assets/product_x.png";
import product_y from "@assets/product_y.png";
import expand from "@assets/expand_icon.svg";
import useIsVisible from '@hooks/useIsVisible';


const QSSCATS = [
    {
        title: "Shop Shirts",
        productImg: product_x,
    },
    {
        title: "Shop Polos",
        productImg: product_y,
    },
    {
        title: "Shop Long Sleeves",
        productImg: product_x,
    },
    {
        title: "Shop Joggers",
        productImg: product_x,
    },
    {
        title: "Shop Pants",
        productImg: product_y,
    },
    {
        title: "Shop Jackets",
        productImg: product_x,
    },
];


const QuickShopSect = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    function scrollCat(dir) {  
        const qss_innerWrapper = document.querySelector('.qss_innerWrapper');

        let scrollByLen = 200

        const scrollOptions = {
            top: 0,
            left: dir == 'left' ? (-1 * scrollByLen) : scrollByLen,
            behavior: "smooth",
        }

        qss_innerWrapper?.scrollBy(scrollOptions)
    }
    
  

    return (
        <div className='quickShopSect'>
            <div className="qss_innerWrapper">
                <div  className="qss_mincat_cont">
                    {QSSCATS?.map((cat, i) => (
                        <QSSMiniCat key={i} cat={cat} index={i} setActiveIndex={setActiveIndex} />
                    ))}
                </div>
            </div>
            <div className="qss_left_scroll_btn qss_scroll_btn" onClick={() => scrollCat('left')}>
                <img src={expand} alt="expand" className="expand_icon" />
            </div>
            <div className="qss_right_scroll_btn qss_scroll_btn" onClick={() => scrollCat('right')}>
                <img src={expand} alt="expand" className="expand_icon" />
            </div>
            <div className="curr_qss_items">
                {QSSCATS?.map((_, i) => (
                    <div key={i} className={`curr_qss_item ${activeIndex == i && 'active_curr_qss_item'}`}></div>
                ))}
            </div>
        </div>
    )
}

export default QuickShopSect;

const QSSMiniCat = ({ cat, index, setActiveIndex }) => {
    const miniCatRef = useRef();
    const isVisible = useIsVisible(miniCatRef);

    useEffect(() => {
        isVisible && setActiveIndex(index);
    }, [isVisible]);
    

    return (
        <div ref={miniCatRef} className="qss_minicat">
            <div className="qss_mc_imgWrapper">
                <img src={cat?.productImg} alt="product" className="qss_mc_img" />
            </div>
            <div className="qss_mc_title_container">
                <p>{cat?.title}</p>
                <img src={expand} alt="expand icon" className="qss_mc_expand_right" />
            </div>
        </div>
    )
}