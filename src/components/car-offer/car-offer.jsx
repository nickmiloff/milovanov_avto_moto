import React from 'react';

import Gallery from '../gallery/gallery';
import CarOfferInfo from '../car-offer-info/car-offer-info';
import CarOfferTabs from '../car-offer-tabs/car-offer-tabs';

import {offerImages} from '../../mock';

const CarOffer = () => {
  return (
    <section className="car-offer">
      <div className="container">
        <Gallery additionalClass="car-offer__gallery car-offer__gallery--new" photos={offerImages} />
        <CarOfferInfo />
        <CarOfferTabs />
      </div>
    </section>
  );
};

export default CarOffer;
