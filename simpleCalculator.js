class Calculator {
	constructor() {
		this.slots = [];
		this.add = function() {
			let sum = 0;
			for (let i = 0; i < arguments.length; i++) sum += arguments[i];
			this.num = sum;
			return sum;
		};

		this.multiply = function() {
			let sum = arguments[0];
			for (let i = 1; i < arguments.length; i++) sum *= arguments[i];
			this.num = sum;
			return sum;
		};

		this.last = function() {
			return this.num;
		};

		this.set_slot = function(slotNumber) {
			// this.slots = [];
			// this.slots.push(this.last());
			// this.slotPosition = this.slots;
			// return this.slots[slotNumber - 1];
			this.slots.push(this.last())
			return this.slots[arguments[0] - 1];
		};

		this.get_slot = function() {
			// return 	this.slotPosition[arguments[0] - 1];
			return this.slots[arguments[0] - 1]
		}
	}
}

const calculator = new Calculator();
// console.log(calculator.last());
// console.log(typeof calculator.last());
// console.log(calculator.multiply(3,3));
// console.log(calculator.lastArr);
// console.log(calculator.add(1, 3));
// console.log(calculator.last());
// console.log(calculator.set_slot(1));
// console.log(calculator.get_slot(1));
// console.log(calculator.add(10, 30));
// console.log(calculator.set_slot(1));
// console.log(calculator.get_slot(1));
// console.log(calculator.set_slot(1));
// console.log(calculator.get_slot(1));
// console.log(calculator.add(10, 30));
// console.log(calculator.set_slot(2));
// console.log(calculator.get_slot(2));
// console.log(calculator.slots);