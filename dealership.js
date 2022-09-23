const Car = require('./car.js');

const Dealership = function(name, carNumber){
    this.name = name;
    this.carNumber = carNumber;
    this.carStock = [];
}

Dealership.prototype.countCarStock = function(){
    return this.carStock.length;
}

Dealership.prototype.addCarStock  = function (car) {                
    if(this.carStock.length<this.carNumber){
        this.carStock.push(car)
        console.log("The car has been added."); 
    } else {
        console.log("The shop is full.");
    }
    
} 

Dealership.prototype.manufacturerName = function() {

    let manufacturerName = [];

    let car = this.carStock;

    for(i in car){
       manufacturerName.push(car[i].manufacturer); 
    }
    
    console.log("Array: " + manufacturerName);
}

Dealership.prototype.arrayCarManufacturer = function(manufacturerName) {
    return this.carStock.filter(element => element.manufacturer == manufacturerName)
}

Dealership.prototype.maxValue = function() {

    const value = 0;

    const increasingAmount = this.carStock.map(Element => Element.price);

    return increasingAmount.reduce((previousValue, currentValue) => previousValue + currentValue, value);
}

module.exports = Dealership;

