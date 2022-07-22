const prompt = require("prompt-sync")({ sigint: true });
const displayLogo = require("./displayAsciiArt");
const crypt = require("./encryptionFunctions");

function main() {
    displayLogo.initDisplay();
    
    let action = prompt("Type 'encode' to encrypt, type 'decode' to decrypt: ");
    console.log("\n");
    let message = prompt("Type your message: ");
    let shiftNumber = prompt("Type the shift number: ");
    
    if ((action === "encode" || action === "decode") && Number(shiftNumber) > 0) {
        let result = "";
        if (action === "encode") {
            result = crypt.encrypt(message, Number(shiftNumber)); // some encode function.
            console.log(`\nHere is the encoded message: ${result}`);
        } else {
            result = crypt.decrypt(message, Number(shiftNumber));
            console.log(`\nHere is the decoded message: ${result}`);
        }
    } else {
        console.log("Invalid Command");
    }
}


main();
