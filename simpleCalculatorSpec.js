describe("simple calculator", function() {

  it("should add two numbers", () => {
    let [arr1, arr2, arr3 ] = [[],[],[]];
    arr1.push(0,0);
    arr2.push(-1,-1);
    arr3.push(4,5);
    expect(add(...arr1)).toEqual(0);
    expect(add(...arr2)).toEqual(-2);
    expect(add(...arr3)).toEqual(9);
  })

  it("should add as many numbers as I want", () => {
    let arr = [];
    arr.push(1,2,3,4,10);
    expect(add(...arr)).toEqual(20);
  });

  it("should multiply 2 numbers", () => {
    let arr = [];
    arr.push(1,2);
    expect(multiply(...arr)).toEqual(2)
  });

  it("should multiply as many numbers as I want", () => {
    let arr = [];
    arr.push()
    expect(multiply(...arr)).toEqual()
  });

});