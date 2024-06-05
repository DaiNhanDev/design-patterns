class Car {
  name;
  doors;
  price;
  customerInfor;
  constructor({
    name = "Ford Ranger",
    doors = 4,
    price = "1.000 USD",
    customerInfor = {},
  }) {
    this.name = name;
    this.doors = doors;
    this.price = price;
    this.customerInfor = customerInfor;
  }
}

class Truck {
  name;
  doors;
  price;
  customerInfor;
  constructor({
    name = "Ford Ranger",
    doors = 4,
    price = "1.000 USD",
    customerInfor = {},
  }) {
    this.name = name;
    this.doors = doors;
    this.price = price;
    this.customerInfor = customerInfor;
  }
}

class ServiceLogicstics {
  transportClass = Car;

  getTransport({customerInfor}) {
    return new this.transportClass({customerInfor})
  }
} 

const carSevice = new ServiceLogicstics();

console.log('======>carSevice ', carSevice.getTransport({  customerInfor: {name: 'Nhan', cargoVolume: '100 kg' }}));

carSevice.transportClass = Truck;
console.log('======>TruckSevice ', carSevice.getTransport({  customerInfor: {name: 'Tips', cargoVolume: '1000 kg' }}));


class TruckService extends ServiceLogicstics {
  transportClass = Truck;
}

const truckService = new TruckService();

console.log('======>TruckSevice ', truckService.getTransport({  customerInfor: {name: 'Tips', cargoVolume: '1000 kg' }}));
