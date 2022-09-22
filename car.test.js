const Car = require('./car')

let ford;

beforeEach(() => {
    ford = new Car('Ford', 25000, 'Diesel');
})

test('it should have a manufacturer', () => {
    expect(ford.manufacturer).toBe("Ford");
})

test('it should have a price', () => {
    expect(ford.price).toBe(25000);
})

test('it should have an engine type', () => {
    expect(ford.engineType).toBe("Diesel");
})