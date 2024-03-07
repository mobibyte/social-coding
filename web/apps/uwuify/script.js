function uwuifyText() {
    var userInput = document.getElementById("userInput").value;
    var textModified = uwuify(userInput);
    document.getElementById("result").innerText = textModified;
}

function uwuify(text) {
    return text.replace(/l/g, 'w').replace(/u/g, 'o');
}
