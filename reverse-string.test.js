import reverseString from "./reverse-string.js";

it("Reverse 'Hihowareyoutoday'", () => {
    expect(reverseString("Hihowareyoutoday")).toBe("yadotuoyerawohiH");
});

it("Reverse 'This is the best thing ever'", () => {
    expect(reverseString("This is the best thing ever")).toBe(
        "reve gniht tseb eht si sihT"
    );
});
