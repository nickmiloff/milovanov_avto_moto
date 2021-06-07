import React, {useReducer} from 'react';

import Gallery from '../gallery/gallery';
import OfferInfo from '../offer-info/offer-info';
import Tabs from '../tabs/tabs';

import Characteristics from '../characteristics/characteristics';
import Reviews from '../reviews/reviews';
import Contacts from '../contacts/contacts';

import reducer from './reducer/reducer';
import * as actions from './reducer/actions';

import {offerImages, offerDescription, offerСharacteristics, offerReviews} from '../../mock';

const TITLES = [
  `Характеристики`,
  `Отзывы`,
  `Контакты`
];

const CarOffer = () => {
  const [state, dispatch] = useReducer(reducer, {reviews: [...offerReviews]});

  const onReviewAdd = (review) => {
    dispatch(actions.addReview(review));
  };

  return (
    <section className="car-offer">
      <div className="container">
        <Gallery additionalClass="car-offer__gallery car-offer__gallery--new" photos={offerImages} />
        <OfferInfo {...offerDescription} />
        <Tabs additionalClass="car-offer__tabs" titles={TITLES}>
          <Characteristics items={offerСharacteristics} />
          <Reviews
            items={state.reviews}
            onReviewAdd={onReviewAdd}
          />
          <Contacts />
        </Tabs>
      </div>
    </section>
  );
};

export default CarOffer;
