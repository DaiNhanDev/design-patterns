class Discount {
  calc(value: number) {
    return value * 0.9;
  }
}

class Shiping {
  calc() {
    return 5;
  }
}

class Fees {
  calc(value: number) {
    return value * 1.05;
  }
}

class ShopeeFacadePattern {
  discount: Discount;
  shipping: Shiping;
  fees: Fees;

  constructor() {
    this.discount = new Discount();
    this.shipping = new Shiping();
    this.fees = new Fees();
  }
  calc(price: number) {
    price = this.discount.calc(price);
    console.log('====> discount', price);
    price = this.fees.calc(price);
    console.log('====> fees', price);

    price += this.shipping.calc();
    return price;
  }

}

export const buy = (price: number) => {
  const buyShopee = new ShopeeFacadePattern();
  console.log(`Price:::: ${buyShopee.calc(price)}`);
}

