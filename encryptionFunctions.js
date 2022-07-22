function collectIndexes(message, alphabet) {
    let indexes = [];
    for (let i = 0; i < message.length; i++) {
        let index = alphabet.indexOf(message[i]);
        indexes.push(index);
    }
    return indexes;
}

function shiftAlphabetForward(shiftNum) {
    let alphabet = 
    ["a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r", 
    "s", "t", "u", "v", "w", "x", "y", "z"];
    for (let i = 0; i < shiftNum; i++) {
        let firstElement = alphabet.shift();
        alphabet.push(firstElement);
    }
    return alphabet;
}

function shiftAlphabetBackward(shiftNum, alphabet) {
    for (let i = 0; i < shiftNum; i++) {
        let lastElement = alphabet.pop();
        alphabet.unshift(lastElement);
    }
    return alphabet;
}

function createMessage(indexes, alphabet) {
    let encodedMessage = "";
    for (let i = 0; i < indexes.length; i++) {
        if (indexes[i] === -1) { 
            encodedMessage += " ";
            continue;
        }
        encodedMessage += alphabet[indexes[i]];
    }
    return encodedMessage;
}

function encrypt(message, shiftNum) {
    let alphabet = 
    ["a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r", 
    "s", "t", "u", "v", "w", "x", "y", "z"];
    let indexes = collectIndexes(message, alphabet);
    let shiftedAlphabet = shiftAlphabetForward(shiftNum);
    let encodedMessage = createMessage(indexes, shiftedAlphabet);
    return encodedMessage;
}

function decrypt(message, shiftNum) {
    let shiftedAlphabet = shiftAlphabetForward(shiftNum);
    let indexes = collectIndexes(message, shiftedAlphabet);
    let alphabet = shiftAlphabetBackward(shiftNum, shiftedAlphabet);
    let decodedMessage = createMessage(indexes, alphabet);
    return decodedMessage;
}

exports.encrypt = encrypt;
exports.decrypt = decrypt;