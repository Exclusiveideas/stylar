import React from 'react';
import '@homestyles/miniCatalogue.css';

const MiniCat = ({ cat, activeEnlarge }) => {

    return (
        <div className='mincat_wrapper'>
            <div className="mincat_wrapper_top">
                <img src={cat?.productImg} alt="product" className="mincat_product_img" />
            </div>
            <div className="mincat_wrapper_bottom" data-mincat-enlarged={activeEnlarge}>
                <p className="product_color">{cat?.color}</p>
                <p className="product_title">{cat?.title}</p>
                <p className="product_price">${cat?.price}</p>
                <div className="available_colors">
                    {cat?.colors.map((color, i) => (
                        <div key={i} className="color_rect" style={{ backgroundColor: color }}></div>
                    ))}
                </div>
            </div>
        </div>
    ) 
}

export default MiniCat;;