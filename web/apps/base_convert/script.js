// Get references to input elements
let inputNumber = document.getElementById("input-number");
let fromBaseSelect = document.getElementById("from-base");
let toBaseSelect = document.getElementById("to-base");
let outputDiv = document.getElementById("output");

// Function to convert number from any base to base 10
function convertToBase10(number, fromBase) 
{
    let base10Number = 0;
    let digits = number.split("").reverse();
    for (let i = 0; i < digits.length; i++) 
    {
        let digit = parseInt(digits[i], fromBase);
        base10Number += digit * Math.pow(fromBase, i);
    }
    return base10Number;
}

/* FUNCTION UNDER CONSTRUCTION
//function to convert ASCII text to any base number
function convertStringBase(str, fromBase, toBase) {

    //convert our str to base 10
    let numInBase10 = convertToBase10(str, fromBase);

    switch(toBase)
    {
        case 2:
            return 
        case 8:
            return
        case 10:
            return numInBase10;
        case 16:
            return 
        default:
            throw new Error(`Invalid conversion: ${fromBase} to ${toBase}`);
    }

}
*/


// Function to convert number between bases
function convertNumber(number, fromBase, toBase) {
    let base10Number = convertToBase10(number, fromBase);
    switch (toBase) {
        case 2:
            return (base10Number).toString(2);
        case 8:
            return (base10Number).toString(8);
        case 10:
            return (base10Number).toString(10);
        case 16:
            return (base10Number).toString(16);
        case 'string':
            return convertStringBase(base10Number.toString(), 10, 'string');
        default:
            throw new Error(`Invalid conversion: ${fromBase} to ${toBase}`);
    }
}


// Add event listener for form submission
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    
    // Update the output div with the converted value
    outputDiv.textContent = "Result: " + convertNumber(inputNumber.value, parseInt(fromBaseSelect.value), parseInt(toBaseSelect.value));
});