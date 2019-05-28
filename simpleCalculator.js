class Calculator{
	constructor(){
		this.add = function() {
			let sum = 0;
			for (let i = 0; i < arguments.length; i++) 
				sum += arguments[i];
			return sum;
		}

		this.multiply = function () {
			let sum = arguments[0];	
			for (let i = 1; i < arguments.length; i++)
				sum *= arguments[i];
			return sum;
		}
	}

}

const calculator = new Calculator();
console.log(calculator.add(1,3));
console.log(calculator.multiply(3,3));