describe("simple calculator", function() {
  it("should add two numbers", () => {
    let calculator = new Calculator();
    let [arr1, arr2, arr3] = [[], [], []];
    arr1.push(0, 0);
    arr2.push(-1, -1);
    arr3.push(4, 5);
    expect(calculator.add(...arr1)).toEqual(0);
    expect(calculator.add(...arr2)).toEqual(-2);
    expect(calculator.add(...arr3)).toEqual(9);
  });

  it("should add as many numbers as I want", () => {
    let calculator = new Calculator();
    let arr = [];
    arr.push(1, 2, 3, 4);
    expect(calculator.add(...arr)).toEqual(10);
  });

  it("should multiply two numbers", () => {
    let calculator = new Calculator();
    let arr = [];
    arr.push(1, 2);
    expect(calculator.multiply(...arr)).toEqual(2);
  });

  it("should multiply as many numbers as I want", () => {
    let calculator = new Calculator();
    let arr = [];
    arr.push();
    expect(calculator.multiply(...arr)).toEqual();
  });

  it("should return the last result", () => {
    let calculator = new Calculator();
    expect(calculator.add(1, 2)).toEqual(3);
    expect(calculator.last()).toEqual(3);
  });

  it("should allow LAST to be used as parameter", () => {
    let calculator = new Calculator();
    expect(calculator.add(1, 2)).toEqual(3);
    let LAST = calculator.last();
    expect(calculator.multiply(LAST, 5)).toEqual(15);
  });

  it("should remember more stuff", () => {
    let calculator = new Calculator();
    expect(calculator.add(1, 2)).toEqual(3);
    expect(calculator.set_slot(1)).toEqual(3);
    expect(calculator.get_slot(1)).toEqual(3);
    expect(calculator.add(10, 20)).toEqual(30);
    expect(calculator.set_slot(2)).toEqual(30);
    expect(calculator.get_slot(2)).toEqual(30);
    expect(calculator.add(100, 200)).toEqual(300);
    expect(calculator.set_slot(1)).toEqual(3);
    expect(calculator.get_slot(2)).toEqual(30);
    expect(calculator.last()).toEqual(300);
  });

  it("should allow the use of memory slots and LAST as arguments", () =>{
    let calculator = new Calculator();
    expect(calculator.add(1, 2)).toEqual(3);
    expect(calculator.set_slot(1)).toEqual(3);
    expect(calculator.add(10, 20)).toEqual(30);
    expect(calculator.set_slot(2)).toEqual(30);
    expect(calculator.add(100, 200)).toEqual(300);
    expect(calculator.get_slot(1)).toEqual(3);
    expect(calculator.get_slot(2)).toEqual(30);
    expect(calculator.last()).toEqual(300);
    let LAST = calculator.last();
    let SLOT_1 = calculator.slots[0]
    let SLOT_2 = calculator.slots[1]
    expect(calculator.add(LAST, 10)).toEqual(310);
    expect(calculator.add(SLOT_1, 5)).toEqual(8);
    expect(calculator.multiply(SLOT_2, 2)).toEqual(60);
  });
});
