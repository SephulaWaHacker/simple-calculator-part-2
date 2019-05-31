describe("simple calculator", function() {
  it("should add two numbers", () => {
    let [arr1, arr2, arr3] = [[], [], []];
    arr1.push(0, 0);
    arr2.push(-1, -1);
    arr3.push(4, 5);
    expect(calculator.add(...arr1)).toEqual(0);
    expect(calculator.add(...arr2)).toEqual(-2);
    expect(calculator.add(...arr3)).toEqual(9);
  });

  it("should add as many numbers as I want", () => {
    let arr = [];
    arr.push(1, 2, 3, 4);
    expect(calculator.add(...arr)).toEqual(10);
  });

  it("should multiply two numbers", () => {
    let arr = [];
    arr.push(1, 2);
    expect(calculator.multiply(...arr)).toEqual(2);
  });

  it("should multiply as many numbers as I want", () => {
    let arr = [];
    arr.push();
    expect(calculator.multiply(...arr)).toEqual();
  });

  it("should return the last result", () => {
    expect(calculator.add(1, 2)).toEqual(3);
    expect(calculator.last()).toEqual(3);
  });

  it("should allow last() to be used as parameter", () => {
    expect(calculator.add(1, 2)).toEqual(3);
    expect(calculator.multiply(calculator.last(), 5)).toEqual(15);
  });

  it("should remember more stuff &&  use slot number as a parameter", () => {
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
    expect(calculator.set_slot(1)).toEqual(3);
    expect(calculator.get_slot(2)).toEqual(30);
    expect(calculator.last(2)).toEqual(300);
    expect(calculator.add(calculator.slots[0], 5)).toEqual(8);
    expect(calculator.multiply(calculator.slots[1], 2)).toEqual(60);
  });
});
