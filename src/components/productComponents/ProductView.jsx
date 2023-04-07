import React, { useEffect, useRef, useState } from 'react'
import "@productstyles/productView.css";
import product_x from "@assets/product_x.png";
import product_y from "@assets/product_y.png";
import star from '@assets/star.svg';
import plus from '@assets/plus.svg';
import ap_icon from '@assets/ap_icon.svg';
import cloud from '@assets/cloud.svg';
import wave from '@assets/wave.svg';
import shirt from '@assets/shirt.svg';
import u_star from '@assets/u-star.svg';
import MiniCat from '../MiniCat';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const ProductView = () => {
  gsap.registerPlugin(ScrollTrigger)

  const productViewRef = useRef()
  const productViewRefRight = useRef()

  useEffect(() => {

    const productViewRHeight = productViewRefRight?.current?.offsetHeight

    console.log(productViewRHeight)

    let ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.pvm_imgCont',
          scrub: 1,
          toggleActions: "play reverse play reverse",
          pin: true,
          start: "-=60",
          end: `+=${productViewRHeight * (2.5 / 4)}`,
          // markers: true
        },
      });
    }, productViewRef);

    return () => ctx.revert(); // cleanup
  }, [])

  return (
    <div ref={productViewRef} className='productView'>
      <div className="productView_left">
        <div className="pv_productQuickView">
          {Array(5).fill().map((_, i) => (
            <div key={i} className="pv_pqv_imgCont">
              <img src={product_x} alt="product image" className="pv_pqv_productImage" />
            </div>
          ))}
        </div>
      </div>
      <div className="productView_middle">
        <div className="pvm_imgCont">
          <img src={product_x} alt="product image" className="pvm_productImage" />
        </div>
      </div>
      <div ref={productViewRefRight} className="productView_right">
        <div className="pv_right_innerWrapper">
          <FirstProductDet />
          <SecondProductDet />
          <CompleteTheLook />
        </div>
      </div>
    </div>
  )
}
export default ProductView;

let review = {
  rating: 4
};

let sizeOpts = ['S', 'M', 'L', 'XL', 'XXl'];
let colorOpts = ['5A5A74', 'A1B5D0', '030000', '648017'];

const FirstProductDet = () => {
  return (
    <div className="firstProductDet">
      <div className="fpd_nameSect">
        <div className="fpd_rating_wrapper">
          <div className="fpd_rw_stars">
            {Array(review?.rating).fill().map((e, i) => (
              <img key={i} src={star} alt="star icon" className="fpd_star_icon" />
            ))}
            {Array(5 - (review?.rating)).fill().map((e, i) => (
              <img key={i} src={u_star} alt="star icon" className="fpd_star_icon" />
            ))}
          </div>
          <p className="fpd_review_count">(326)</p>
        </div>
        <p className="fpd_product_name">AO Long Sleeve Henley Curvettem</p>
      </div>
      <div className="fpd_sizeSect">
        <div className="fpd_size_title">
          <p className="sizeTxt">Size</p>
          <p className="selectedSize">medium</p>
        </div>
        <div className="fpd_size_options">
          {sizeOpts?.map((opt, i) => (
            <div key={i} className="sizeopt_wrapper">
              <p>{opt}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="fpd_colorSect">
        <div className="colorSect_title">
          <p>Color</p>
        </div>
        <div className="colors_wrapper">
          {colorOpts?.map((colorOpt, i) => (
            <div key={i} className="colorOpt" style={{ backgroundColor: `#${colorOpt}` }}></div>
          ))}
        </div>
      </div>
      <div className="fpd_priceSect">
        <div className="priceWrapper">
          <p className="oldPrice">$73</p>
          <p className="newPrice">$68</p>
        </div>
        <div className="ctaWrapper">
          <div className="cta_box">
            <p>ADD TO CART</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const SecondProductDet = () => {
  const [showMC, setShowMC] = useState(false)
  const [showRT, setShowRT] = useState(false)

  const SPDetRef = useRef();

  function toggleShowMC() {
    setShowMC(!showMC)
  }

  function toggleShowRT() {
    setShowRT(!showRT)
  }

  return (
    <div ref={SPDetRef} className="secondProductDet">
      <div className="spd_descSect">
        <p className="descTxt">
          The AO Long Sleeve Curve-Hem Tee brings a modern edge to our classic henley silhouette. Cut from our proprietary PYCA Pro® fabric and detailed with a curved hemline, this tee is designed for comfort and versatility. Designed to keep up with an active lifestyle, this henley is great for the work week, travel, and any occasion from casual to formal wear. Featuring a more trim, Signature-fit, it’s tailored to move with your body and will become one of your favorite tees in no time.
        </p>
      </div>
      <div className="spd_mcareSect">
        <div className="spd_mc_top">
          <p className="mctop_title">Material & Care</p>
          <div className="spd_plusWrapper" onClick={toggleShowMC}>
            <img src={plus} alt="expand icon" className="spd_plus_icon" />
          </div>
        </div>
        <div className={`spd_mc_expandedSect ${showMC && 'open'}`}>
          <div className="spd_mc_expanded_det">
            <img src={ap_icon} alt="anti-pilling icon" className="spd_mc_eImg" />
            <p>Anti-Pilling</p>
          </div>
          <div className="spd_mc_expanded_det">
            <img src={cloud} alt="cloud icon" className="spd_mc_eImg" />
            <p>Buttery-Soft</p>
          </div>
          <div className="spd_mc_expanded_det">
            <img src={wave} alt="wave icon" className="spd_mc_eImg" />
            <p>Wrinkle-Free</p>
          </div>
          <div className="spd_mc_expanded_det">
            <img src={shirt} alt="shirt icon" className="spd_mc_eImg" />
            <p>Bespoke Design</p>
          </div>
        </div>
      </div>
      <div className="spd_mcareSect">
        <div className="spd_mc_top">
          <p className="mctop_title">Returns</p>
          <div className="spd_plusWrapper" onClick={toggleShowRT}>
            <img src={plus} alt="expand icon" className="spd_plus_icon" />
          </div>
        </div>
        <div className={`spd_rt_expandedSect ${showRT && 'open'}`}>
          <div className="spd_rt_expanded_det">
            <p className="returnsTxt">We want you to love your item(s), but in the off-chance that you don't, we accept full price product returns. Please note a $10 restocking fee will be deducted from your return amount.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const CompleteTheLook = () => {

  let CATS = [
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
  ]

  return (
    <div className="completeTheLook">
      <div className="ctL_titleWrapper">
        <p className="ctlTitle">Complete The Look</p>
      </div>
      <div className="ctl_optionsWrapper">
        {CATS?.map((cat, i) => (
          <MiniCat key={i} cat={cat} />
        ))}
      </div>
    </div>
  )
}