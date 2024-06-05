class MomoPaymentAdapter {
  momoPayment: MomoPayment;
  constructor(momoPayment: MomoPayment) {
    this.momoPayment = momoPayment;
  }

  paymentWithVisa(visaPayment: VisaPayment) {
    const convertedPayment = this.convertVisaToPayment(this.momoPayment);
    visaPayment.pay(convertedPayment);
  }

  convertVisaToPayment(momoPayment: MomoPayment) {
    const conversionRate = 23000;
    const visaAmount = momoPayment.amount / conversionRate;
    const visaPayment = {
      cardNumber: momoPayment.cardNumber,
      expiryDate: momoPayment.expiryDate,
      cvv: momoPayment.cvv,
      amount: visaAmount,
    };

    return visaPayment;
  }
}

class VisaPayment {
  pay(payment) {
    console.log("====> VisaPayment", payment);
  }
}

class MomoPayment {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  amount: number;

  constructor(
    cardNumber: string,
    expiryDate: string,
    cvv: string,
    amount: number
  ) {
    this.cardNumber = cardNumber;
    this.expiryDate = expiryDate;
    this.cvv = cvv;
    this.amount = amount;
  }
}

const momoPayment = new MomoPayment('4242424242424242', '12/27', '123', 2300000);

const momoPaymentAdapter = new MomoPaymentAdapter(momoPayment);

const visaPayment = new VisaPayment();

momoPaymentAdapter.paymentWithVisa(visaPayment);