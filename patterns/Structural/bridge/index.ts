class PaymentProcess {
  payment(amount){

  }
}

class VisaPaymentProcess extends PaymentProcess {
  cardNumber: string;
  expiryDate: string;
  cvv: string;

  constructor(
    cardNumber: string,
    expiryDate: string,
    cvv: string,
  ) {
    super();
    this.cardNumber = cardNumber;
    this.expiryDate = expiryDate;
    this.cvv = cvv;
  }

  pay(amount) {
    console.log('===> VisaPaymentProcess', {amount, cardNumber: this.cardNumber});
  }
}

class MomoPaymentProcess extends PaymentProcess {
  phoneNumber: string;


  constructor(
    phoneNumber: string,
  ) {
    super();
    this.phoneNumber = phoneNumber;
  }

  pay(amount) {
    console.log('===> MomoPaymentProcess', {amount, cardNumber: this.phoneNumber});
  }
}

class MemberRegistration {
  paymentProcessor
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  register() {
    const amount = 100;
    this.paymentProcessor.pay(amount);
  }
}

const visaProcessor = new VisaPaymentProcess('424244242', '12/25', '123');
const momoProcessor = new MomoPaymentProcess('797979797979');

const membershipVisa = new MemberRegistration(visaProcessor);
const membershipMomo = new MemberRegistration(visaProcessor);

membershipVisa.register();
membershipMomo.register();