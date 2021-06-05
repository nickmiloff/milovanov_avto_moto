import React from 'react';
import PropTypes from 'prop-types';

import ReviewsItem from '../reviews-item/reviews-item';

const Reviews = ({
  items
}) => {
  return (
    <div className="reviews">
      <a href="" className="reviews__review-button link link--secondary">
        оставить отзыв
      </a>
      <ul className="reviews__list reviews__list--main">
        {
          items.map((el, index) => <ReviewsItem key={`reviews-item-${index}`} {...el} />)
        }
      </ul>
    </div>
  );
};

Reviews.propTypes = {
  items: PropTypes.array.isRequired
};

export default Reviews;
