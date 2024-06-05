import express, { Express } from "express";
import dotenv from "dotenv";
import { Developer, Secretary } from "./Structural/proxy";
import { OrderManager } from "../solid/S";
// import { buy } from './Structural/facade';
// import { Observer, Subject } from "./Behavioral/observer";
import {messi} from './Creational/prototype';
import {messiBuild} from './Creational/builder';

dotenv.config();

const app: Express = express();
app.set("port", process.env.PORT || 8080);


// buy(140000);

// const subject = new Subject();

// const riki = new Observer("Riki");
// const sniper = new Observer("Sniper");
// const pudget = new Observer("Pudget");

// subject.addSbserver(riki);
// subject.addSbserver(sniper);
// subject.addSbserver(pudget);

// subject.notify({ long: 123, lat: 54 });
// const dev = new Developer('Nhan upto 5K');

// dev.applyFor(new Secretary())
const orderManager = new OrderManager();
orderManager.createOrder('userId-1101');
orderManager.addProducts({
  productId: 123,
  quantity: 2,
  price: 20000,
  unit: 'VND'
});

console.log('=====> ORDER INFO::: ', orderManager.getOrder());
console.log('=====> SEND MAIL ORDER::: ', orderManager.sendOrder());
console.log('=====> messi.score();::: ', messi);

console.log('=====> messi.builder();::: ', messiBuild.toString());

export default app;
