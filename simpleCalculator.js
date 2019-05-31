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
			this.slots.push(this.last())
			return this.slots[arguments[0] - 1];
		};

		this.get_slot = function() {
			return this.slots[arguments[0] - 1]
		}
	}
}
const calculator = new Calculator();