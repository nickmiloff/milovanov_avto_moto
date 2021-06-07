import React, {useState} from 'react';
import PropTypes from 'prop-types';

import ReviewsItem from '../reviews-item/reviews-item';
import ReviewsForm from '../reviews-form/reviews-form';
import Modal from '../modal/modal';

const Reviews = ({
  items
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="reviews">
      <button
        href=""
        className="reviews__review-button link link--secondary"
        type="button"
        onClick={() => {
          setIsModalOpen(() => true);
        }}
      >
        оставить отзыв
      </button>
      <ul className="reviews__list reviews__list--main">
        {
          items.map((el, index) => <ReviewsItem key={`reviews-item-${index}`} {...el} />)
        }
      </ul>
      <Modal
        isOpen={isModalOpen}
        onCancel={() => {
          setIsModalOpen(() => false);
        }}
      >
        <ReviewsForm
          onSubmit={() => {
            setIsModalOpen(() => false);
          }}
        />
      </Modal>
    </div>
  );
};

Reviews.propTypes = {
  items: PropTypes.array.isRequired
};

export default Reviews;
