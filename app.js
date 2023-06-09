class Vehicle{
    constructor(a,b,c){
        this.make = a;
        this.model = b;
        this.year = c
    }
    honk(){
        return "Beep."
    }
    toString(){
        return (`This is a ${this.make} ${this.model} made in the year ${this.year}`)
    }
}

class Car extends Vehicle{
    constructor(a,b,c){
        super(a,b,c)
    }
    numWheels(){
        return 4
    }
}

class Motorcycle extends Vehicle{
    constructor(a,b,c){
        super(a,b,c)
    }
    numWheels(){
        return 2
    }
    revEngine(){
        return 'VROOM'
    }
}

class Garage{
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle){
        if(!(newVehicle instanceof Vehicle)){
            return 'Only vehicles are allowed in here!'
        }
        if (this.vehicles.length >= this.capacity){
            return "sorry, we're full.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!"
    }
}