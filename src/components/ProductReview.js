import React from 'react';
import ProductReviewCard from "./ProductReviewCard.js";
import "../styles/ProductReview.css"

const ProductReview = ({ ProductReview }) => {
  return (
    <div className='ProductReviews'>
      {ProductReview.map((item, index) => (
        <ProductReviewCard
          key={item.image}
          price={item.price}
          name={item.name}
          image={item.image}
          review={item.review}
          index={index}
        />
      ))}
    </div>
  );
};

export default ProductReview;
