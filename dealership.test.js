const Dealership = require('./dealership')
const Car = require('./car')

let member;

beforeEach(() => {
    member = new Dealership('Ford', 12);
})

test('it should have a name', () => {
    expect(member.name).toBe("Ford");
})

test('it should have a number of cars', () => {
    expect(member.carNumber).toBe(12);
})

test("Car stock", () => {

    let name = "carStock";
    let carNumber = 2;
    let carStock= [new Car('Ford', 25000, 'Diesel'), new Car('Toyota', 60000, 'Petrol')];
    
    let dealership = new Dealership('carStock', 2, 1);
   
    dealership.carStock = carStock;

    const actual = dealership.countCarStock();
    const expected = 2;
    expect(actual).toBe(expected);
   
});

test("Add car stock", () => {
    let addCarStock = [new Car('Citroen', 7800, 'Diesel'), new Car('Mercedes', 100000, 'Petrol')];

    let dealership = new Dealership('carStock', 3, 3);

    dealership.member = member;

    dealership.addCarStock(addCarStock);

    const actual = dealership.countCarStock();
    const expected = 1;
    expect(actual).toBe(expected);
    
});

test("Find by manufacturer's name", () => {
    let car = new Car('Ford', 25000, 1);

    member.car = car;

    const actual = member.manufacturerName();
    const expected = "Ford";
    expect(actual).toBe(expected);

});

test("Find car from a given manufacturer", () => {
    let car = new Car('Ford', 25000, 1);

    member.car = car;

    const actual = member.arrayCarManufacturer("Ford").length;
    const expected = 1;
    expect(actual).toBe(expected);
});
