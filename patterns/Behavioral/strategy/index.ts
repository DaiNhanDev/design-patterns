/**
 *  Giam gia khi dat truoc
 * @param {*} originalPrice
 * @returns
 */

function preOrderPrice(originalPrice: number) {
  return originalPrice * 0.8;
}

/**
 *  Voucher
 * @param {*} originalPrice
 * @returns
 */

function promotionPrice(originalPrice: number) {
  return originalPrice < 200 ? originalPrice * 0.9 : originalPrice - 30;
}

/**
 *  Gia mac dinh
 * @param {*} originalPrice
 * @returns
 */

function dayPrice(originalPrice: number) {
  return originalPrice * 0.6;
}

/**
 *  Giam gia khi dat truoc
 * @param {*} originalPrice
 * @returns
 */

function defaultPrice(originalPrice: number) {
  return originalPrice * 0.8;
}

/**
 *  Giam gia khi dat truoc
 * @param {*} originalPrice
 * @returns
 */

function blackFridayPrice(originalPrice: number) {
  return originalPrice * 0.4;
}

const getPriceStrategies = {
  preOrder: preOrderPrice,
  promotion: promotionPrice,
  blackFriday: blackFridayPrice,
  default: defaultPrice,
  dayPrice
}

export type TypePromotion = keyof typeof getPriceStrategies;
 
export function getPrice(
  originalPrice: number,
  typePromotion: TypePromotion,
): number {
  
  return getPriceStrategies[typePromotion](originalPrice);
}
