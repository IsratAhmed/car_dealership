const Dealership = require('./dealership')

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