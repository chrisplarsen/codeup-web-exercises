"use strict"

console.log('Hello from external JavaScript!');

alert("Welcome to my website!")

    // the following line will show the OK/CANCEL confirm dialog
//var confirmed = confirm('Are you sure you want to do XYZ?');
//console.log(confirmed); // will be either true or false

var userInput = prompt('What is your favorite color?');
alert('Great! ' + userInput + ' is my favorite color too!');

//Problem 1:
//You have rented some movies for your kids: The little mermaid (for 3 days),
//Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know
//yet if they're going to like it). If price for a movie per day is $3, how much
//will you have to pay?

alert('The total price of the movies is ' + (3+5+1)*3)

//Problem 2:
//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
//they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook
//$350. How much will you receive in payment for this week? You worked 10 hours for
//Facebook, 6 hours for Google and 4 hours for Amazon.

alert("You made $" + ((400*6)+(380*4)+(350*10)))

//Problem 3:
//A student can be enrolled in a class only if the class is not full and the class
//schedule does not conflict with her current schedule.

var full = confirm("Is the class full?");
var conflict = confirm("Is there a conflict with the schedule?")
alert("You can enroll in the class: " + (!full && !conflict))

//Problem 4:
//A product offer can be applied only if a person buys more than 2 items, and the
//offer has not expired. Premium members do not need to buy a specific amount of
//products.

var expired = confirm("Is product offer expired?")
var itemsBought = Number(prompt("How many items bought?"))
var premiumMember = confirm("Are you a premium member?")
alert("Do you receive a product offer?" + (!expired && (itemsBought >= 2 || premiumMember)))

var username = 'codeup';
var password = 'notastrongpassword';

var passwordIs5Characters = password.length >= 5;
var passwordContainUsername = password.includes(username);
var usernameMoreThan20Characters = username.length <= 20;
var containsWhitespace = password === password.trim() && username === username.trim();

console.log(passwordIs5Characters)
console.log(passwordContainUsername)
console.log(usernameMoreThan20Characters)
console.log(containsWhitespace)
