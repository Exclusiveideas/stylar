import React, { useState } from 'react';
import "@productstyles/productReviews.css";
import write from "@assets/write_icon.svg";
import star from '@assets/star.svg';
import u_star from '@assets/u-star.svg';
import ProductReview from '@productcomponents/ProductReview';

const ProductReviews = () => {
  const [writeReview, setWriteReview] = useState(false);

  function toggleWriteReview() {
    setWriteReview(!writeReview)
  }

  return (
    <div className='productReviews'>
      <div className="pr_top">
        <p className="pr_topTxt">Customer Reviews</p>
        <div className="pr_writeCTA" onClick={toggleWriteReview}>
          {!writeReview ?
            <p>write a review</p>
            : <p>Cancel</p>
          }
          {!writeReview && <div className="pr_cta_overlay">
            <img src={write} alt="write icon" className="write_icon" />
          </div>}
        </div>
      </div>
      <PRForm writeReview={writeReview} />
      {Array(5).fill().map((_, i) => (
        <ProductReview key={i} />
      ))}
    </div>
  )
}

export default ProductReviews;

const PRForm = ({ writeReview }) => {
  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    rating: 0,
    reviewTitle: '',
    reviewBody: ''
  })

  function updateForm(e, type) {
    let updatedValue = { ...formDetails, [type]: e.target.value }
    setFormDetails(updatedValue)
  }

  function updateFormRating(rVal) {
    setFormDetails({...formDetails, rating: rVal})
  }

  return (
    <div className={`prform_wrapper ${writeReview && 'writeReview'}`}>
      <div className="prform_innerWrapper">
        <div className="form_sect">
          <p className="formLabel">Name</p>
          <div className="input_wrapper">
            <input placeholder='Enter your name' className='input' value={formDetails.name} onChange={e => updateForm(e, 'name')} type="text" name="name" />
          </div>
        </div>
        <div className="form_sect">
          <p className="formLabel">Email</p>
          <div className="input_wrapper">
            <input placeholder='johnsmith@example.com' className='input' value={formDetails.email} onChange={e => updateForm(e, 'email')} type="email" name="email" />
          </div>
        </div>
        <div className="form_sect">
          <p className="formLabel">Rating</p>
          <div className="formRating_wrapper">
          {Array(formDetails?.rating).fill().map((e, i) => (
            <img key={i} src={star} alt="star icon" className="star_icon" 
            onClick={() => updateFormRating(i + 1)} />
          ))}
          {Array(5 - (formDetails?.rating)).fill().map((e, i) => (
            <img key={i} src={u_star} alt="star icon" className="star_icon"
            onClick={() => updateFormRating(formDetails?.rating + 1 + i)} />
          ))}
          </div>
        </div>
        <div className="form_sect">
          <p className="formLabel">Review Title</p>
          <div className="input_wrapper">
            <input placeholder='Give your review a title' className='input' value={formDetails.reviewTitle} onChange={e => updateForm(e, 'reviewTitle')} type="text" name="title" />
          </div>
        </div>
        <div className="form_sect">
          <p className="formLabel">Body Of Review (1500)</p>
          <div className="input_wrapper">
            <textarea placeholder='Write your full review here' maxLength={150} multiple={true} className='input' value={formDetails.reviewBody} onChange={e => updateForm(e, 'reviewBody')} type="text" name="body" />
          </div>
        </div>
        <div className="submit_wrapper">
          <div className="sw_writeCTA">
            <p>Submit</p>
          </div>
        </div>
      </div>
    </div>
  )
}