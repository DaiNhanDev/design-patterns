// Single Responsibility Principle (SRP)

export class Order {
  userId;
  timeOder = Date.now();
  products = [];
  constructor(userId) {
    this.userId = userId;
  }
}

export class OrderManager {
  order: Order;
  sendMailOrder: SendMailOrder;

  createOrder(userId) {
    this.order = new Order(userId);
  }

  addProducts(product) {
    this.order.products.push(product);
  }

  getOrder() {
    return this.order;
  }
  isValid() {
    return !!this.order.products.length;
  }
  sendOrder() {
    if (this.isValid()) {
      this.sendMailOrder = new SendMailOrder();
      return this.sendMailOrder.sendMailOrder(this.order);
    }
  }
}

class SendMailOrder {
  sendMailOrder(order: Order) {
    console.log("=====> SEND MAIL", order);
    return 1;
  }
}
