import calculator from "../functions/calculator.js";

it("Add 2 + 6", () => {
    expect(calculator.add(2, 6)).toEqual(8);
});
it("Add 9 + 4", () => {
    expect(calculator.add(9, 4)).toEqual(13);
});

it("Subtract 8 from 5", () => {
    expect(calculator.subtract(5, 8)).toEqual(-3);
});

it("Subtract 4 from 7", () => {
    expect(calculator.subtract(7, 4)).toEqual(3);
});

it("Divide 256 by 16", () => {
    expect(calculator.divide(256, 16)).toEqual(16);
});
it("Divide 14 by 16", () => {
    expect(calculator.divide(14, 16)).toBeCloseTo(0.875);
});

it("Multiply 8 by 184", () => {
    expect(calculator.multiply(8, 184)).toEqual(1472);
});

it("Multiply 3048 by 48213", () => {
    expect(calculator.multiply(3048, 48213)).toEqual(146953224);
});
