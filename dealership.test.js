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
