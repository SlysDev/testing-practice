import analyzeArray from "../functions/analyze-array.js";

it("Average test", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).average()).toBe(4);
});

it("Minimum test", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).min()).toBe(1);
});

it("Maximum test", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).max()).toBe(8);
});

it("Length test", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
