import React, { useEffect, useState } from 'react';
import '@productsstyles/allProducts.css';
import MiniCat from '@components/MiniCat';
import product_x from "@assets/product_x.png";
import product_y from "@assets/product_y.png";

const CATS = [
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
        productImg: product_x,
        colors: ['#C0742E', '#592A88', '#2E631B', '#2D5F8D', '#8A1D1D']
    },
    {
        color: "Pacific Blue",
        title: "Concorde Jogger",
        price: 62,
        productImg: product_y,
        colors: ['#8A1D1D', '#C0742E', '#592A88', '#2E631B']
    },
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
        color: "Pacific Blue",
        title: "Concorde Jogger",
        price: 62,
        productImg: product_y,
        colors: ['#8A1D1D', '#C0742E', '#592A88', '#2E631B']
    },
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
        color: "Pacific Blue",
        title: "Concorde Jogger",
        price: 62,
        productImg: product_y,
        colors: ['#8A1D1D', '#C0742E', '#592A88', '#2E631B']
    },
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

const MENAPNVCATS = [
    {
        title: "tops",
        catsTxt: [
            "All Tops",
            "Shirts",
            "Polos",
            "Long Sleeves Shirts"
        ]
    },
    {
        title: "bottoms",
        catsTxt: [
            "All Bottoms",
            "Joggers",
            "Pants",
            "Sweat Pants"
        ]
    },
    {
        title: "outwears",
        catsTxt: [
            "Jacket",
            "Sherpa",
        ]
    },
];

const AllProducts = () => {
    const [activeEnlarge, setActiveEnlarge] = useState('small');

    function onCatClick(cat) {
        console.log("cat: ", cat)
    }

    return (
        <div className='allProducts'>
            <div className="ap_expand_wrapper">
                <div className="ap_expand_wrapper_top">
                    <div className="topTxt">men - tops</div>
                    <div className="mainTxt">Shirts</div>
                </div>
                <div className="icons">
                    <ExpandIcon iconFunc="small" activeEnlarge={activeEnlarge} setActiveEnlarge={setActiveEnlarge} />
                    <ExpandIcon iconFunc="big" activeEnlarge={activeEnlarge} setActiveEnlarge={setActiveEnlarge} />
                </div>
            </div>
            <div className='all_products_innerWrapper'>
                <div className="ap_navbar">
                    <div className="ap_navbar_top">
                        <div className="topTxt">men - tops</div>
                        <div className="mainTxt">Shirts</div>
                    </div>
                    <div className="ap_navbar_bottom">
                        {MENAPNVCATS?.map((catsInfo, i) => (
                            <div key={i} className="ap_navbar_cats">
                                <p className="catsTitle">{catsInfo?.title}</p>
                                {catsInfo?.catsTxt?.map((catsTxt, i) => (
                                    <div onClick={() => onCatClick(catsTxt)} key={i} className="cats_wrapper">
                                        <p className="catsTxt">{catsTxt}</p>
                                        <hr className="ap_cats_underline" />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="ap_allproducts_wrapper">
                    <div className="ap_mincat_Cont" data-enlarged={activeEnlarge}>
                        {CATS?.map((cat, i) => (
                            <MiniCat key={i} cat={cat} activeEnlarge={activeEnlarge} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AllProducts;


const ExpandIcon = ({ iconFunc, activeEnlarge, setActiveEnlarge }) => {
    const [fill, setFill] = useState('none');

    function toggleFill() {
        if (iconFunc == 'big') {
            if (activeEnlarge == 'big') return

            if (fill == 'none') {
                setFill('black')
            }
            else {
                setFill('none')
            }
        }

        else {
            if (activeEnlarge == 'small') return

            if (fill == 'none') {
                setFill('black')
            }
            else {
                setFill('none')
            }
        }
    }

    useEffect(() => {
        if (iconFunc == 'big') {
            if (activeEnlarge == 'big') setFill('black')
            else {
                setFill('none')
            }
        }
        else {
            if (activeEnlarge == 'small') setFill('black')
            else {
                setFill('none')
            }
        }
    }, [activeEnlarge]);


    return (
        <>
            {
                iconFunc == 'big' ? (
                    <svg onClick={() => setActiveEnlarge('big')} onMouseEnter={toggleFill} onMouseLeave={toggleFill} className="ap_expand_size" viewBox="0 0 22 22" fill={fill} xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 7.52V2.98C21 1.57 20.36 1 18.77 1H14.73C13.14 1 12.5 1.57 12.5 2.98V7.51C12.5 8.93 13.14 9.49 14.73 9.49H18.77C20.36 9.5 21 8.93 21 7.52ZM21 18.77V14.73C21 13.14 20.36 12.5 18.77 12.5H14.73C13.14 12.5 12.5 13.14 12.5 14.73V18.77C12.5 20.36 13.14 21 14.73 21H18.77C20.36 21 21 20.36 21 18.77ZM9.5 7.52V2.98C9.5 1.57 8.86 1 7.27 1H3.23C1.64 1 1 1.57 1 2.98V7.51C1 8.93 1.64 9.49 3.23 9.49H7.27C8.86 9.5 9.5 8.93 9.5 7.52ZM9.5 18.77V14.73C9.5 13.14 8.86 12.5 7.27 12.5H3.23C1.64 12.5 1 13.14 1 14.73V18.77C1 20.36 1.64 21 3.23 21H7.27C8.86 21 9.5 20.36 9.5 18.77Z" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                ) : (
                    <svg onClick={() => setActiveEnlarge('small')} onMouseEnter={toggleFill} onMouseLeave={toggleFill} className="ap_expand_size" viewBox="0 0 18 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.54 6.31001C15.1924 6.31001 15.8181 6.05084 16.2795 5.5895C16.7408 5.12816 17 4.50245 17 3.85001C17 3.19758 16.7408 2.57187 16.2795 2.11053C15.8181 1.64919 15.1924 1.39001 14.54 1.39001C13.8876 1.39001 13.2619 1.64919 12.8005 2.11053C12.3392 2.57187 12.08 3.19758 12.08 3.85001C12.08 4.50245 12.3392 5.12816 12.8005 5.5895C13.2619 6.05084 13.8876 6.31001 14.54 6.31001ZM3.46 6.31001C4.11243 6.31001 4.73814 6.05084 5.19948 5.5895C5.66082 5.12816 5.92 4.50245 5.92 3.85001C5.92 3.19758 5.66082 2.57187 5.19948 2.11053C4.73814 1.64919 4.11243 1.39001 3.46 1.39001C2.80757 1.39001 2.18186 1.64919 1.72052 2.11053C1.25918 2.57187 1 3.19758 1 3.85001C1 4.50245 1.25918 5.12816 1.72052 5.5895C2.18186 6.05084 2.80757 6.31001 3.46 6.31001ZM14.54 18.61C14.8631 18.61 15.1829 18.5464 15.4814 18.4228C15.7799 18.2991 16.051 18.1179 16.2795 17.8895C16.5079 17.6611 16.6891 17.3899 16.8127 17.0914C16.9364 16.793 17 16.4731 17 16.15C17 15.827 16.9364 15.5071 16.8127 15.2086C16.6891 14.9102 16.5079 14.639 16.2795 14.4105C16.051 14.1821 15.7799 14.0009 15.4814 13.8773C15.1829 13.7536 14.8631 13.69 14.54 13.69C13.8876 13.69 13.2619 13.9492 12.8005 14.4105C12.3392 14.8719 12.08 15.4976 12.08 16.15C12.08 16.8024 12.3392 17.4282 12.8005 17.8895C13.2619 18.3508 13.8876 18.61 14.54 18.61ZM3.46 18.61C3.78305 18.61 4.10294 18.5464 4.4014 18.4228C4.69986 18.2991 4.97105 18.1179 5.19948 17.8895C5.42792 17.6611 5.60912 17.3899 5.73274 17.0914C5.85637 16.793 5.92 16.4731 5.92 16.15C5.92 15.827 5.85637 15.5071 5.73274 15.2086C5.60912 14.9102 5.42792 14.639 5.19948 14.4105C4.97105 14.1821 4.69986 14.0009 4.4014 13.8773C4.10294 13.7536 3.78305 13.69 3.46 13.69C2.80757 13.69 2.18186 13.9492 1.72052 14.4105C1.25918 14.8719 1 15.4976 1 16.15C1 16.8024 1.25918 17.4282 1.72052 17.8895C2.18186 18.3508 2.80757 18.61 3.46 18.61Z" stroke="black" strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}
        </>
    )
};