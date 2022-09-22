const Customer = require('./customer')

let person;

beforeEach(() => {
    person = new Customer('Israt', 25000, null);
})

test('it should have a name', () => {
    expect(person.name).toBe("Israt");
})

test('it should have a wallet', () => {
    expect(person.wallet).toBe(25000);
})

test('it should have a car', () => {
    expect(person.car).toBe(null);
})