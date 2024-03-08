function uwuifyText() {
    var userInput = document.getElementById("userInput").value;
    var textModified = uwuify(userInput);
    document.getElementById("result").innerText = textModified;
}

function uwuify(text) {
    var result = '';

    for (var i = 0; i < text.length; i++) {
        var currentChar = text[i];
        var previousChar = i > 0 ? text[i - 1] : '';

        if (currentChar === 'r' || currentChar === "R") {
            result += 'w';
        } else if (currentChar === 'l' || currentChar === "L") {
            result += 'w';
        } else if ((currentChar === 'o' || currentChar === 'O') &&
                   (previousChar === 'm' || previousChar === 'n' || previousChar === 'M' || previousChar === 'N')) {
            result += 'y' + currentChar;
        } else {
            result += currentChar;
        }
    }

    return result;
}

