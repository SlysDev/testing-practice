import capitalize from "./capitalize.js";
it("Capitalize 'hello'", () => {
    expect(capitalize("hello")).toBe("Hello");
});

it("Capitalize 'Yardstick'", () => {
    expect(capitalize("Yardstick")).toBe("Yardstick");
});
