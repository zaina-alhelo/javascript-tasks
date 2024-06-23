// Task 1 && Task 2 && Task 3 && Task 4

class Car {
  constructor(Make, Model) {
    this.make = Make;
    this.model = Model;
  }
  start() {
    console.log(`The ${this.make} car with model ${this.model} has started`);
  }
}
class ElectricCar extends Car {
   constructor(make, model, batterySize) {
    super(make, model);
    this.batterySize = batterySize;
    }
}

let car1 = new Car;
car1.make = "Mercedes";
car1.model = "AMG C63";
console.log(car1);
car1.start()
let car2 = new Car("BMW", "M440I");

let car3 = new ElectricCar("BMW", "M440I","40kWh");

// Task 5 && Task 6
class Account {
    #balance;
    constructor(balance) {
        this.#balance = balance;

    }
    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited: ${amount}, New Balance: ${this.#balance}`);
    }
    withdrawMoney(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount; 
            console.log(`withdraw : ${amount} , New Balance: ${this.#balance} `);
        }

    }
    setbalance(balance) {
        this.#balance = balance;
    }
    getbalance() {
        return this.#balance;
    }
}
let account1 = new Account(2000);
account1.deposit(1000);
account1.withdrawMoney(100);
account1.setbalance(10000)
console.log(account1.getbalance())