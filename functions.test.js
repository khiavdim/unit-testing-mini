const functions = require("./functions");

test("returnTwo should return 2", () => {
  expect(functions.returnTwo()).toBe(2);
});

test("greeting should properly return a greeting", () => {
  expect(functions.greeting("James")).toBe("Hello, James.");
  expect(functions.greeting("Jill")).toBe("Hello, Jill.");
});

describe("Math functions", () => {
  test("Add should correctly add two numbers together", () => {
    expect(functions.add(1, 2)).toBe(3);
    expect(functions.add(5, 9)).toBe(14);
  });

  test("Subtract should correctly minus two numbers together", () => {
    expect(functions.subtract(2, 1)).toBe(1);
    expect(functions.subtract(5, 2)).toBe(3);
  });

  test("Multiply should correctly multiply two numbers together", () => {
    expect(functions.multiply(1, 2)).toBe(2);
    expect(functions.multiply(5, 5)).toBe(25);
  });
  test("Divide should correctly divide two numbers together", () => {
    expect(functions.divide(2, 1)).toBe(2);
    expect(functions.divide(5, 5)).toBe(1);
  });
});
