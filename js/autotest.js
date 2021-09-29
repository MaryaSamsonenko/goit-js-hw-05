//  ============Task 10 ===========================

// class Storage {
//     constructor(items = []) {
//         this.items = items;
//     }
//     getItems() {
//         return this.items;
//     }
//     addItem(newItem) {
//         return this.items.push(newItem);
//     }
//     removeItem(itemToRemove) {
//         return this.items.filter(item => item !== itemToRemove);
//     }
// }

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
// console.log(storage.removeItem('Prolonger'));

//  Option 2 ====================

// class Storage {
//     constructor(items = []) {
//         this.items = items;
//     }
//     getItems() {
//         return this.items;
//     }
//     addItem(newItem) {
//         return this.items.push(newItem);
//     }
//     removeItem(itemToRemove) {
//         return this.items.splice(this.items.indexOf(itemToRemove), 1);
//     }
// }

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//  ============ Task 11 ===========================

// Напиши класс StringBuilder, который принимает один параметр initialValue - произвольную строку, которая записывается на создаваемый объект в свойство value.

// Объяви следующие методы класса:

// getValue() - возвращает текущее значение свойства value.
// padEnd(str) - получает парметр str (строку) и добавляет её в конец значения свойства value объекта который вызывает этот метод.
// padStart(str) - получает парметр str (строку) и добавляет её в начало значения свойства value объекта который вызывает этот метод.
// padBoth(str) - получает парметр str (строку) и добавляет её в начало и в конец значения свойства value объекта который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// Тесты
// Объявлен класс StringBuilder
// В классе StringBuilder объявлен метод getValue
// Метод getValue возвращает значение свойства value экземпляра класса который его вызывает
// В классе StringBuilder объявлен метод padEnd
// Метод padEnd изменяет свойство value экземпляра класса, который его вызывает
// В классе StringBuilder объявлен метод padStart
// Метод padStart изменяет свойство value экземпляра класса который его вызывает
// В классе StringBuilder объявлен метод padBoth
// Метод padBoth изменяет свойство value экземпляра класса который его вызывает
// В результате вызова new StringBuilder(".") значение переменной builder это объект
// У объекта builder есть свойство value
// Первый вызов builder.getValue(), сразу после инциализации экземпляра, возвращает строку .
// Второй вызов builder.getValue(), после вызова builder.padStart("^"), возвращает строку ^.
// Третий вызов builder.getValue(), после вызова builder.padEnd("^"), возвращает строку ^.^
// Четвёртый вызов builder.getValue(), после вызова builder.padBoth("="), возвращает строку =^.^=

//  ========== Solution 11 =========================

// class StringBuilder {
//     constructor(initialValue = '') {
//         this.value = initialValue;
//     }

//     getValue() {
//         return this.value;
//     }
//     padEnd(str) {
//         this.value = this.value + str;
//     }
//     padStart(str) {
//         this.value = str + this.value;
//     }
//     padBoth(str) {
//         this.value = str + this.value + str;
//     }
// }

// // Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

//  ============ Task 12 ===========================
//  ========== Solution 12 =========================

//  ============ Task 13 ===========================

// Выполни рефакторинг класса Storage, сделав свойство items приватным.

// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// Тесты
// Объявлен класс Storage
// У объекта storage нет свойства items
// В классе Storage объявлен метод getItems
// В классе Storage объявлен метод addItem
// В классе Storage объявлен метод removeItem
// Свойство items в классе Storage объявлено приватным
// Конструктор класса принимает свойство items
// В результате вызова new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значение переменной storage это объект
// Первый вызов storage.getItems(), сразу после инциализации экземпляра, возвращает массив ["Nanitoids", "Prolonger", "Antigravitator"]
// Второй вызов, storage.getItems(), после вызова storage.addItem("Droid"), возвращает массив ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// Третий вызов storage.getItems(), после вызова storage.removeItem("Prolonger"), возвращает массив ["Nanitoids", "Antigravitator", "Droid"]

//  ========== Solution 13 =========================

// class Storage {
//     // Change code below this line
//     #items;
//     constructor(items) {
//         this.#items = items;
//     }

//     getItems() {
//         return this.#items;
//     }

//     addItem(newItem) {
//         this.#items.push(newItem);
//     }

//     removeItem(itemToRemove) {
//         this.#items = this.#items.filter(item => item !== itemToRemove);
//     }
// }

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

//  ============ Task 14 ===========================

// Выполни рефакторинг класса StringBuilder, сделав свойство value приватным.

// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// Тесты
// Объявлен класс StringBuilder

// Свойство value в классе StringBuilder объявлено приватным

// В классе StringBuilder объявлен метод getValue

// В классе StringBuilder объявлен метод padEnd

// В классе StringBuilder объявлен метод padStart

// В классе StringBuilder объявлен метод padBoth

// В результате вызова new StringBuilder('.') значение переменной builder это объект

// У объекта builder нет свойства value

// Первый вызов builder.getValue(), сразу после инциализации экземпляра, возвращает строку .

// Второй вызов builder.getValue(), после вызова builder.padStart("^"), возвращает строку ^.

// Третий вызов builder.getValue(), после вызова builder.padEnd("^"), возвращает строку ^.^

// Четвёртый вызов builder.getValue(), после вызова builder.padBoth("="), возвращает строку =^.^=

//  ========== Solution 14 =========================

// class StringBuilder {
//   // Change code below this line
// #value
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

//  ============ Task 15 ===========================

// Выполни рефакторинг класса Car. Сделай свойства model и price приватными, также как #brand. Стандартизируй публичный интерфейс класса заменив уже объявленные методы на геттеры и сеттеры brand, model и price для взаимодействия с приватными свойствами.

// Тесты
// Объявлен класс Car
// В классе Car объявлено приватное свойство brand
// В классе Car объявлено приватное свойство model
// В классе Car объявлено приватное свойство price
// Конструктор класса принимает объект со свойствами brand, model и price
// В классе Car объявлен геттер brand
// В классе Car объявлен сеттер brand
// В классе Car объявлен геттер model
// В классе Car объявлен сеттер model
// В классе Car объявлен геттер price
// В классе Car объявлен сеттер price

//  ========== Solution 15 =========================

// class Car {
//     // Change code below this line
//     #brand;
//     #model;
//     #price;
//     constructor({ brand, model, price }) {
//         this.#brand = brand;
//         this.#model = model;
//         this.#price = price;
//     }

//     get brand() {
//         return this.#brand;
//     }

//     set brand(newBrand) {
//         this.#brand = newBrand;
//     }

//     get model() {
//         return this.#model;
//     }

//     set model(newModel) {
//         this.#model = newModel;
//     }

//     get price() {
//         return this.#price;
//     }

//     set price(newPrice) {
//         this.#price = newPrice;
//     }
//     // Change code above this line
// }

//  ============ Task 16 ===========================

//  ========== Solution 16 =========================

// class Car {
//     // Change code below this line
//     static MAX_PRICE = 50000;
//     #price;

//     constructor({ price }) {
//         this.#price = price;
//     }

//     get price() {
//         return this.#price;
//     }

//     set price(newPrice) {
//         // if (newPrice > Car.MAX_PRICE) return;
//         // this.#price = newPrice;

//         if (newPrice <= Car.MAX_PRICE) {
//             this.#price = newPrice;
//         } else {
//             this.#price;
//         }
//     }
//     // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

//  ============ Task 17 ===========================

// Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля. Метод должен сравнить значения параметра price и приватного статического свойства MAX_PRICE.

// Если цена автомобиля превышает максимальную, метод должен вернуть строку "Error! Price exceeds the maximum".
// В противном случае метод должен вернуть строку "Success! Price is within acceptable limits".
// Под объявлением класса мы добавили инициализацию экземпляра и вызовы методов, чтобы показать как будет использоваться метод checkPrice(price).

// Тесты
// Объявлен класс Car
// У класса Car есть статический метод checkPrice(price)
// Вызов Car.checkPrice(36000) возвращает строку "Success! Price is within acceptable limits"
// Вызов Car.checkPrice(18000) возвращает строку "Success! Price is within acceptable limits"
// Вызов Car.checkPrice(64000) возвращает строку "Error! Price exceeds the maximum"
// Вызов Car.checkPrice(57000) возвращает строку "Error! Price exceeds the maximum"

//  ========== Solution 17 =========================

// class Car {
//     static #MAX_PRICE = 50000;
//     // Change code below this line
//     static checkPrice(price) {
//         if (price > Car.#MAX_PRICE) {
//             return 'Error! Price exceeds the maximum';
//         }
//         return 'Success! Price is within acceptable limits';
//     }
//     // Change code above this line
//     constructor({ price }) {
//         this.price = price;
//     }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

//  ============ Task 18 ===========================

// В приложении нужен администратор с возможностью добавлять почты пользователей в чёрный список.

// Объяви класс Admin, который наследует от класса User
// Добавь классу Admin публичное статическое свойство AccessLevel (уровень доступа), значение которого это объект { BASIC: "basic", SUPERUSER: "superuser" }
// Тесты
// Объявлен класс Admin
// Класс Admin наследует от класса User
// У класса Admin есть публичное статическое свойство AccessLevel
// Обращение к Admin.AccessLevel.BASIC возвращает строку "basic"
// Обращение к Admin.AccessLevel.SUPERUSER возвращает строку "superuser"

//  ========== Solution 18 =========================

// class User {
//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }
// // Change code below this line
// class Admin extends User {
//     static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };
// }

//  ============ Task 19 ===========================

// Добавь классу Admin метод constructor, который принимает один параметр - объект настроек с двумя свойствами email и accessLevel. Добавь классу Admin публичное свойство accessLevel, значение которого будет передаваться при вызове конструктора.

// Чтобы показать как будет использоваться класс Admin мы добавили инициализацию экземпляра под объявлением класса.

// Тесты
// Объявлен класс Admin
// Класс Admin наследует от класса User
// У класса Admin есть публичное статическое свойство AccessLevel
// У класса Admin есть метод constructor с параметром в виде объекта {email, accessLevel}
// У класса Admin в конструкторе для свойства email используется обращение к конструктору родительского класса
// Обращение к Admin.AccessLevel.BASIC возвращает строку "basic"
// Обращение к Admin.AccessLevel.SUPERUSER возвращает строку "superuser"

//  ========== Solution 19 =========================

// class User {
//     email;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }

// class Admin extends User {
//     // Change code below this line

//     static AccessLevel = {
//         BASIC: 'basic',
//         SUPERUSER: 'superuser',
//     };
//     constructor({ email, accessLevel }) {
//         super(email);
//         this.accessLevel = accessLevel;
//     }
//     // Change code above this line
// }

// const mango = new Admin({
//     email: 'mango@mail.com',
//     accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

//  ============ Task 20 ===========================

// Добавь классу Admin следующие свойства и методы.

// Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей. Значение по умолчанию это пустой массив.
// Публичный метод blacklist(email) для добавления почты в чёрный список. Метод должен добавлять значение параметра email в массив хранящийся в свойстве blacklistedEmails.
// Публичный метод isBlacklisted(email) для проверки почты в чёрном списке. Метод должен проверять наличие значения параметра email в массиве хранящемся в свойстве blacklistedEmails и возвращать true или false.
// После объявления класса мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// Тесты
// Объявлен класс Admin
// Класс Admin наследует от класса User
// У класса Admin есть публичное свойство blacklistedEmails
// У класса Admin есть публичный метод blacklist
// У класса Admin есть публичный метод isBlacklisted
// После вызова mango.blacklist("poly@mail.com") значение свойства blacklistedEmails это массив ["poly@mail.com"]
// Вызов mango.isBlacklisted("mango@mail.com") возвращает false
// Вызов mango.isBlacklisted("poly@mail.com") возвращает true

//  ========== Solution 20 =========================

// class User {
//     email;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }
// class Admin extends User {
//     // Change code below this line

//     static AccessLevel = {
//         BASIC: 'basic',
//         SUPERUSER: 'superuser',
//     };

//     constructor({ email, accessLevel, blacklistedEmails = [] }) {
//         super(email);
//         this.accessLevel = accessLevel;
//         this.blacklistedEmails = blacklistedEmails;
//     }

//     blacklist(email) {
//         this.blacklistedEmails.push(email);
//     }
//     isBlacklisted(email) {
//         return this.blacklistedEmails.some(value => value === email);
//     }
//     // Change code above this line
// }

// const mango = new Admin({
//     email: 'mango@mail.com',
//     accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com')); // true
