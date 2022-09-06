let caesarCipher = function (encryptedText) {
    let encryptedArray = encryptedText.split("");
    let decryptedArray = encryptedArray.map((letter) => {
        if (letter == " ") {
            return letter;
        } else if (!!letter.match(/^[.,:!?]/)) {
            return letter;
        } else if (letter == "z") {
            return "a";
        } else {
            let charCode = letter.charCodeAt(0);
            charCode++;
            letter = String.fromCharCode(charCode);
            return letter;
        }
    });
    return decryptedArray.join("");
};

export default caesarCipher;
