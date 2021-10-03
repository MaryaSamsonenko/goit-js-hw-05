//  Задачи с ментором

//  Пример коллбека

// function showName(name) {
//     alert('Запустился алерт');
//     alert(name);
// }
// function showAlertName(callback) {
//     const name = prompt('What is you name?');
//     callback(name);
// }
// showAlertName(showName);

//  Пример замыкания ????????????? непонятно(((

// function showName(name) {
//     return function (name) {
//         return alert(name);
//     };
// }
// function showAlertName(callback) {
//     const name = prompt('What is you name?');
//     callback(name);
// }
// showAlertName(showName);

//  =============== Task 1 ===================

// String.prototype.toJadenCase = function () {
//     return this.trim()
//         .split(' ')
//         .map(word => word[0].toUpperCase() + word.slice(1))
//         .join(' ');
// };
// const sentence = "Now can mirrors be real if our eyes aren't real";
// console.log(sentence.toJadenCase()); // "Now Can Mirrors Be Real If Our Eyes Aren't Real";

//  Option 2

// String.prototype.toJadenCase = function () {
//     return this.split(' ').reduce((acc, el) => {
//         if (el) {
//             return acc + ' ' + el[0].toUpperCase() + el.slice(1);
//         }
//         return acc + el;
//     }, '');
// };
// const sentence = "Now can mirrors be real if our eyes aren't real";
// console.log(sentence.toJadenCase()); // "Now Can Mirrors Be Real If Our Eyes Aren't Real";

//  ================ Task 2 ==================

//  нужно исправить ошибку

// const inventory = {
//     item: ["Knife", "Gas mask"],
//     add(itemName) {
//         console.log(`Adding ${itemName} to inventory`);
//         this.items.push(itemName);
//     },
//     remove(itemName) {
//         console.log(`Removing ${itemName} from inventory`);
//         this.items = this.items.filter(item => item !== itemName);
//     },
// };
// const invokeInventoryAction = function (itemName, action) {
//     console.log(`Invorking action on ${itemName}`);
//     action(itemName);
// };
// invokeInventoryAction('Medkit', inventory.add);
// console.log(inventory.items);

const inventory = {
    items: ['Knife', 'Gas mask'],
    add(itemName) {
        console.log(`Adding ${itemName} to inventory`);
        this.items.push(itemName);
    },
    remove(itemName) {
        console.log(`Removing ${itemName} from inventory`);
        this.items = this.items.filter(item => item !== itemName);
    },
};
const invokeInventoryAction = function (itemName, action) {
    console.log(`Invorking action on ${itemName}`);
    action(itemName);
};
invokeInventoryAction('Medkit', inventory.add.bind(inventory));
console.log(inventory.items);

invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
console.log(inventory.items);
