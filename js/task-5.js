// // Напиши класс Car с указанными свойствами и методами.
// //   /*
// //    * Добавь статический метод `getSpecs(car)`,
// //    * который принимает объект-машину как параметр и выводит
// //    * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
// //    */

// //   /*
// //    * Конструктор получает объект настроек.
// //    *
// //    * Добавь свойства будущеего экземпляра класса:
// //    *  speed - текущая скорость, изначально 0
// //    *  price - цена автомобиля
// //    *  maxSpeed - максимальная скорость
// //    *  isOn - заведен ли автомобиль, значения true или false. Изначально false
// //    *  distance - общий киллометраж, изначально 0
// //    */
// //   constructor() {}

// //   /*
// //    * Добавь геттер и сеттер для свойства price,
// //    * который будет работать с свойством цены автомобиля.
// //    */

// //   /*
// //    * Добавь код для того чтобы завести автомобиль
// //    * Записывает в свойство isOn значение true
// //    */
// //   turnOn() {}

// //   /*
// //    * Добавь код для того чтобы заглушить автомобиль
// //    * Записывает в свойство isOn значение false,
// //    * и сбрасывает текущую скорость в 0
// //    */
// //   turnOff() {}

// //   /*
// //    * Добавялет к свойству speed полученное значение,
// //    * при условии что результирующая скорость
// //    * не больше чем значение свойства maxSpeed
// //    */
// //   accelerate(value) {}

// //   /*
// //    * Отнимает от свойства speed полученное значение,
// //    * при условии что результирующая скорость не меньше нуля
// //    */
// //   decelerate(value) {}

// //   /*
// //    * Добавляет в поле distance киллометраж (hours * speed),
// //    * но только в том случае если машина заведена!
// //    */
// //   drive(hours) {}

// class Car {
//     static getSpecs(car = {}) {
//         console.log(
//             `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`,
//         );
//     }

//     constructor({ maxSpeed = 0, speed = 0, isOn = false, distance = 0, price = 0 } = {}) {
//         this.maxSpeed = maxSpeed;
//         this.speed = speed;
//         this.isOn = isOn;
//         this.distance = distance;
//         this._price = price;
//     }
//     get price() {
//         return this._price;
//     }
//     set price(newPrice) {
//         this._price = newPrice;
//     }
//     turnOn() {
//         this.isOn = true;
//     }
//     turnOff() {
//         this.isOn = false;
//         this.speed = 0;
//     }
//     accelerate(value) {
//         if (this.speed + value <= this.maxSpeed) {
//             this.speed += value;
//         }
//     }
//     decelerate(value) {
//         if (this.speed - value >= 0) {
//             this.speed -= value;
//         }
//     }
//     drive(hours) {
//         if (this.isOn === true) {
//             this.distance += hours * this.speed;
//         }
//     }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000

// // RESULT
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
// // 2000
// // 4000
