import React from 'react'
import "@productstyles/productPage.css";
import ProductView from '@productcomponents/ProductView';
import RecommendedForYou from '@productcomponents/RecommendedForYou';
import product_x from "@assets/product_x.png";
import product_y from "@assets/product_y.png";
import ProductReviews from '../components/productComponents/ProductReviews';

let CATS = [
  {
    color: "Pacific Blue",
    title: "Concorde Jogger",
    price: 62,
    productImg: product_y,
    colors: ['#8A1D1D', '#C0742E', '#592A88', '#2E631B']
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
];

const Product = () => {
  const RFYDetails = [
    {
      title: 'Recommended For You',
      cats: CATS
    },
    {
      title: 'Recently Viewed',
      cats: CATS
    }
  ];

  return (
    <div className='productPage'>
      <ProductView />
      <RecommendedForYou details={RFYDetails[0]} />
      <RecommendedForYou details={RFYDetails[1]} />
      <div className="reviewsWrapper">
        <ProductReviews />
      </div>
    </div>
  )
}

export default Product;