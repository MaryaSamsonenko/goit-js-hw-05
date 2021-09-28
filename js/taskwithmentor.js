const Car = function ({ brand, model, price } = {}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
};
const myCar1 = new Car({
    brand: 'Audi',
    model: 'Q7',
    price: 320000,
});
console.log(myCar1);
