const {
  strCount,
  strCountCheck,
  reverseString,
  Calculator,
  capsLetter,
} = require("../index");

describe("Task 1", () => {
  it("String count", () => {
    expect(strCount("Hello")).toBe(5);
  });

  it("String count check", () => {
    expect(() => {
      strCountCheck("Hello");
    }).toThrowError("String is too long or too short");
  });
});

describe("Task 2", () => {
  it("String is reversed", () => {
    expect(reverseString("Hello")).toBe("olleh");
  });
});

describe("Task 3", () => {
  beforeEach(() => {
    Calculator;
  });

  it("Addition", () => {
    expect(Calculator.add(1, 1)).toBe(2);
    expect(Calculator.add(100, 100)).toBe(200);
    expect(Calculator.add(1001, 1001)).toBe(2002);
  });

  it("Subtract", () => {
    expect(Calculator.subtract(10, 5)).toBe(5);
    expect(Calculator.subtract(100, 25)).toBe(75);
    expect(() => {
      Calculator.subtract(1, 5);
    }).toThrowError("First number should be greater than the second number");
  });

  it("Division", () => {
    expect(Calculator.divide(4, 2)).toBe(2);
    expect(Calculator.divide(8, 2)).toBe(4);
    expect(() => {
      Calculator.divide(0, 5);
    }).toThrowError("Can not divide zero by a number");
  });

  it("Multiplication", () => {
    expect(Calculator.multiply(2, 2)).toBe(4);
    expect(Calculator.multiply(6, 2)).toBe(12);
    expect(Calculator.multiply(5, 5)).toBe(25);
  });
});

describe("Task 4", () => {
  expect(capsLetter("hello")).toBe("Hello");
});
