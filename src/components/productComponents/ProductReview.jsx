import React from 'react';
import "@productstyles/productReview.css";
import star from '@assets/star.svg';
import u_star from '@assets/u-star.svg';

let formDetails = {
  rating: 3
}

const ProductReview = () => {
  return (
    <div className='productReview'>
      <div className="pr_pImgContainer">
        <div className="imgwrapper"></div>
      </div>
      <div className="pr_pRightContainer">
        <div className="pr_prTop_wrapper">
          <p className="reviewerName">Joey C.</p>
          <p className="verified_buyer">
            Verified Buyer
          </p>
        </div>
        <div className="pr_rating_wrapper">
          {Array(formDetails?.rating).fill().map((e, i) => (
            <img key={i} src={star} alt="star icon" className="pr_star_icon"
              onClick={() => updateFormRating(i + 1)} />
          ))}
          {Array(5 - (formDetails?.rating)).fill().map((e, i) => (
            <img key={i} src={u_star} alt="star icon" className="pr_star_icon"
              onClick={() => updateFormRating(formDetails?.rating + 1 + i)} />
          ))}
        </div>
        <div className="pr_titleWrapper">
          <p className='pr_title'>Everything fits fantastic</p>
          <p className='rBody'>Everything fits fantastic and the quality is incredible</p>
        </div>
        <div className="pr_reviewOnWrapper">
          <p>Reviewed on: <span>AO Long Sleeve Henley Curve-Hem</span></p>
        </div>
      </div>
    </div>
  )
}

export default ProductReview;