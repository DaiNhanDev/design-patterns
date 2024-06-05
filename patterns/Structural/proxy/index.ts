class Boss {
  receiveRequest(offer: string) {
    console.log('=====> resilt: ', offer);
  }
};

export class Secretary {
  boss: Boss = new Boss();
  receiveRequest(offer: string) {
    this.boss.receiveRequest(offer)
  }
}

export class Developer {
  offer: string;
  constructor(offer) {
    this.offer =  offer;
  }

  applyFor(target: Secretary) {
    target.receiveRequest(this.offer);
  }
}