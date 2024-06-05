// with simple factory

const serviceLogicstics = (cargoVolume: string) => {
  switch (cargoVolume) {
    case '10':
      return {
        name: 'Trucks 10',
        doors: 6,
        price: '100.000 VND'
      }
  
    case '20':
    return {
      name: 'Trucks 20',
      doors: 16,
      price: '1.000.000 VND'
    }
  }
} 

// with simple factory

class ServieLogicstics {
  name;
  doors;
  price;

  constructor(doors = 6, price = '100.000 VND', name = 'Truck 10') {
    this.name = name;
    this.doors = doors;
    this.price = price;
  }

  static getTransport(cargoVolume) {
    switch (cargoVolume) {
      case '10':
        return new ServieLogicstics();
      case '20':
      return new ServieLogicstics(16, '1.000.000 VND', 'Truck 20');
    }
  }
}

console.log('======> getTransport', ServieLogicstics.getTransport('20'));