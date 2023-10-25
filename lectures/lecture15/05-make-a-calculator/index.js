function addNumbers() {
    // Your job: 
    // 1. Access the first number that the user typed in and store it
    //    as a variable.
    // 2. Access the first number that the user typed in and store it
    //    as a variable.
    // 3. Convert the values stored inside of the two variables to a 
    //    number (so that you can do math)!
    // 4. Add the two numbers together.
    // 5. Write the result to the #answer section
    let num1 = document.querySelector("#num1").value;
    num1 = Number(num1);
    let num2 = document.querySelector("#num2").value;
    num2 = Number(num2);
    let result = num1 + num2;
    document.querySelector("#answer").innerHTML = result;
}

function subtractNumbers() {
    // Same as above but subtract!
    let num1 = document.querySelector("#num1").value;
    num1 = Number(num1);
    let num2 = document.querySelector("#num2").value;
    num2 = Number(num2);
    let result = num1 - num2;
    document.querySelector("#answer").innerHTML = result;
}

function multiplyNumbers() {
    // Same as above but multiply!
    let num1 = document.querySelector("#num1").value;
    num1 = Number(num1);
    let num2 = document.querySelector("#num2").value;
    num2 = Number(num2);
    let result = num1 * num2;
    document.querySelector("#answer").innerHTML = result;
}

function divideNumbers() {
    // Same as above but divide!
    let num1 = document.querySelector("#num1").value;
    num1 = Number(num1);
    let num2 = document.querySelector("#num2").value;
    num2 = Number(num2);
    let result = num1 / num2;
    document.querySelector("#answer").innerHTML = result;
}

