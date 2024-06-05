export class Observer {
  name: string;
  constructor(name) {
    this.name = name;
  }

  updateStatus(location) {
    this.goToHelp(location);
  }

  goToHelp(location) {
    console.log(`${this.name}:::PING:::${JSON.stringify(location)}`);
  }
}

export class Subject {
  observerList: Observer[] = [];
  // constructor() {
  //   this.observerList = [];
  // }

  addSbserver(observer: Observer) {
    this.observerList.push(observer);
  }

  notify(location) {
    this.observerList.forEach(observer => observer.updateStatus(location));
  }
}
