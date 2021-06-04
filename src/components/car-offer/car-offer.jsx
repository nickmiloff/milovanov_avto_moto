import React from 'react';

import Gallery from '../gallery/gallery';
import OfferInfo from '../offer-info/offer-info';
import Tabs from '../tabs/tabs';

import {offerImages, offerDescription} from '../../mock';

const TITLES = [
  `Характеристики`,
  `Отзывы`,
  `Контакты`
];

const CarOffer = () => {
  return (
    <section className="car-offer">
      <div className="container">
        <Gallery additionalClass="car-offer__gallery car-offer__gallery--new" photos={offerImages} />
        <OfferInfo {...offerDescription} />
        <Tabs additionalClass="car-offer__tabs" titles={TITLES}>
          <span>Характеристики</span>
          <span>Отзывы</span>
          <span>Контакты</span>
        </Tabs>
      </div>
    </section>
  );
};

export default CarOffer;
