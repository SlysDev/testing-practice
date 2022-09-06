import caesarCipher from "../functions/caesar-cipher.js";

it("Single letter Caesar Cipher", () => {
    expect(caesarCipher("a")).toBe("b");
});

it("Full alphabet Caesar Cipher", () => {
    expect(caesarCipher("abcdefghijklmnopqrstuvwxyz")).toBe(
        "bcdefghijklmnopqrstuvwxyza"
    );
});

it("Short Sentence Cipher", () => {
    expect(caesarCipher("defend the east wall of the castle")).toBe(
        "efgfoe uif fbtu xbmm pg uif dbtumf"
    );
});

it("Long Sentence Cipher", () => {
    expect(
        caesarCipher(
            "This is the best thing in the world, because it has to be, and will be."
        )
    ).toBe(
        "Uijt jt uif cftu uijoh jo uif xpsme, cfdbvtf ju ibt up cf, boe xjmm cf."
    );
});
