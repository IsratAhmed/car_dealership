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

Dealership.prototype.arrayCarManufacturer = function() {
    let arrayCarManufacturer = [];
    let carStock = this.carStock;

    for(i in carStock){
        arrayCarManufacturer.push(carStock[i].name);
    }

    console.log("Array: " + arrayCarManufacturer);
}

Dealership.prototype.name = function(name) {
    const message = `${this.name} is the manufacturer of the cars.`
    console.log(message);
}

Dealership.prototype.maxValue = function() {

    const value = 0;

    const increasingAmount = this.carStock.map(Element => Element.price);

    return increasingAmount.reduce((previousValue, currentValue) => previousValue + currentValue, value);

}

module.exports = Dealership;
