import React, { useEffect, useRef } from 'react';
import '@homestyles/homeMiniCat.css';
import useIsVisible from '@hooks/useIsVisible';

const HomeMiniCat = ({ cat, activeEnlarge, index, setActiveIndex }) => {

    const minCatRef = useRef();
    const isVisible = useIsVisible(minCatRef);

    useEffect(() => {
        isVisible && setActiveIndex(index);
    }, [isVisible]);



    return (
        <div ref={minCatRef} className='home_mincat_wrapper'>
            <div className="home_mincat_wrapper_top">
                <img src={cat?.productImg} alt="product" className="home_mincat_product_img" />
            </div>
            <div className="home_mincat_wrapper_bottom" data-mincat-enlarged={activeEnlarge}>
                <p className="home_product_color">{cat?.color}</p>
                <p className="home_product_title">{cat?.title}</p>
                <p className="home_product_price">${cat?.price}</p>
                <div className="home_available_colors">
                    {cat?.colors.map((color, i) => (
                        <div key={i} className="home_color_rect" style={{ backgroundColor: color }}></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomeMiniCat;