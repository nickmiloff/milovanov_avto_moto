export const offerDescription = {
  title: `Марпех 11`,
  configuration: [
    {
      type: `fuel`,
      value: `Бензин`
    },
    {
      type: `gearbox`,
      value: `механика`
    },
    {
      type: `power`,
      value: `100 л.с.`
    },
    {
      type: `displacement`,
      value: `1.4 л`
    }
  ],
  price: {
    old: 2400000,
    new: 2300000,
    credit: 11000
  }
};

export const offerСharacteristics = {
  transmission: `Роботизированная`,
  engineType: `Бензиновый`,
  traction: `Полный`,
  engineDisplacement: 2.4,
  torque: {
    nm: 370,
    rpm: 4500
  },
  cylinders: 4
};

export const offerImages = [
  {
    big: `./img/car-1.jpg`,
    small: `./img/car-1-min.jpg`,
    alt: `Фотография внешнего вида автомобиля`
  },
  {
    big: `./img/car-2.jpg`,
    small: `./img/car-2-min.jpg`,
    alt: `Фотография салона автомобиля`
  },
  {
    big: `./img/car-3.jpg`,
    small: `./img/car-3-min.jpg`,
    alt: `Фотография приборной панели автомобиля`
  }
];

export const offerComments = [
  {
    author: `Борис Иванов`,
    advantages: `мощность, внешний вид`,
    disadvantages: `Слабые тормозные колодки (пришлось заменить)`,
    comment: `Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.`,
    rate: 3,
    posted: `2021-06-04T15:51:10`
  },
  {
    author: `Марсель Исмагилов`,
    advantages: `Cтиль, комфорт, управляемость`,
    disadvantages: ` Дорогой ремонт и обслуживание`,
    comment: `Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.`,
    rate: 3,
    posted: `2021-06-02T18:34:28`
  }
];
