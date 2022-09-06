import capitalize from "../functions/capitalize.js";
it("Capitalize 'hello'", () => {
    expect(capitalize("hello")).toBe("Hello");
});

it("Capitalize 'Yardstick'", () => {
    expect(capitalize("Yardstick")).toBe("Yardstick");
});
