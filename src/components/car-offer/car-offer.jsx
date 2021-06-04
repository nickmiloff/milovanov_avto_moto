import React from 'react';

import Gallery from '../gallery/gallery';
import OfferInfo from '../offer-info/offer-info';
import CarOfferTabs from '../car-offer-tabs/car-offer-tabs';

import {offerImages, offerDescription} from '../../mock';

const CarOffer = () => {
  return (
    <section className="car-offer">
      <div className="container">
        <Gallery additionalClass="car-offer__gallery car-offer__gallery--new" photos={offerImages} />
        <OfferInfo {...offerDescription} />
        <CarOfferTabs />
      </div>
    </section>
  );
};

export default CarOffer;
