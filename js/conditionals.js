"use strict";

/* ########################################################################## */

/**
 *
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(colorName) {
    if (colorName === "blue") {
        return "blue is the color of the sky";
    }
    else if (colorName === "red") {
        return "Strawberries are red";
    }
    else if (colorName === "cyan") {
        return "I don't know anything about cyan.";
    }
    else {
        return colorName + " is not a creative color.";
    }
}

console.log(analyzeColor("blue"));
console.log(analyzeColor("red"));
console.log(analyzeColor("cyan"));
console.log(analyzeColor("green"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 *
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor))
/**
 *
 * Refactor your above function to use a switch-case statement
 */
function analyzeColor2(colorName) {
    switch(colorName) {
        case "blue":
            console.log("blue is the color of the sky");
            break;
        case "red":
            console.log("Strawberries are red");
            break;
        case "cyan":
            console.log("I don't know anything about cyan.");
            break;
    }
}

console.log(analyzeColor2("blue"));
console.log(analyzeColor2("red"));
console.log(analyzeColor2("cyan"));
/**
 *
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var inputColor = prompt("Enter a color.");
alert(analyzeColor(inputColor));
/* ########################################################################## */

/**
 *
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, totalCost) {
    switch(luckyNumber) {
        case 0:
            return totalCost;
        case 1:
            return totalCost - (totalCost * 0.10);
        case 2:
            return totalCost - (totalCost * 0.25);
        case 3:
            return totalCost - (totalCost * 0.35);
        case 4:
            return totalCost - (totalCost * 0.50);
        case 5:
            return 0;
    }
}

console.log(calculateTotal(0, 100));
console.log(calculateTotal(1, 100));
console.log(calculateTotal(2, 100));
console.log(calculateTotal(3, 100));
console.log(calculateTotal(4, 100));
console.log(calculateTotal(5, 100));
/**
 *
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var totalCost = prompt("What was your total bill today?");
alert("Your lucky number is " + luckyNumber);
alert("Your total bill including your discount is now " + calculateTotal(luckyNumber, totalCost))

/**
 *
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var answer = confirm("Would you like to enter a number?");
if (answer) {
    var number = prompt("Enter a number");
    if (isNaN(number)) {
        alert("Not a number");
    } else {
        if (number % 2 == 0) {
            alert("Number is even");
        } else {
            alert("Number is odd");
        }
        alert("100 plus your number is " + Number(number+100));
        if (number < 0) {
            alert("Number is negative");
        } else {
            alert("Number is even");
        }
    }
}