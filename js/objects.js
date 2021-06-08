(function() {
    "use strict";

    /**
     *
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

var person = new Object();
var person = {
    firstName: "Christian",
    lastName: "Larsen",
    };
console.log(person.firstName);
console.log(person.lastName);

    /**
     *
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

person.sayHello = function() {
    return "Hello from " + this.firstName + " " + this.lastName + "!";
}

console.log(person.sayHello());

    /**
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

var shoppers = [
    {name: 'Cameron', amount: 180},
    {name: 'Ryan', amount: 250},
    {name: 'George', amount: 320}
];

//for (var i = 0; i <= 2; i++) {
//    if (shoppers.amount >= 200) {
//        return console.log(shoppers[i].name + " originally paid " + shoppers[i].amount + ", so they got a discount, and " +
//            "actually paid " + (shoppers[i].amount - (shoppers[i].amount) * .12));
//    }
//    if (shoppers.amount < 200) {
//        return console.log(shoppers[i].name + " originally paid " + shoppers[i].amount + ", so they did not get a discount and " +
//            "paid full price.");
//    }
//}

shoppers.forEach(function(shopper) {
    const interest = .12;
    var discount = shopper.amount * interest;
    var total = shopper.amount - discount;
        if (shopper.amount >= 200) {
            return console.log(shopper.name + " paid " + shopper.amount + " so they got a discount and paid " + total);
        } else {
            return console.log(shopper.name + " paid " + shopper.amount + " so they did not get a discount.");
        }
    });

//the above technically works, but it doesn't check if they didn't get the discount so it's actually
//wrong, think the below function is probably easier but will see.
    //
//for (var amountSpent = 0; index >= 200; index++) {
//    var amountSpent =
//}

    /**
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
let books = [
    {
        title: "I Hear the Sunspot",
        author: {
            firstName: "Yuki",
            lastName: "Fumino",
        },
    },
    {
    title: "Full Metal Alchemist",
    author: {
        firstName: "Hiromu",
        lastName: "Arakawa",
        },
    },
    {
    title: "My Hero Academia",
    author: {
        firstName: "Horikoshi",
        lastName: "Kōhei",
        },
    },
    {
    title: "Demon Slayer",
    author: {
        firstName: "Koyoharu",
        lastName: "Gotoge",
        },
    },
    {
    title: "Berserk",
    author: {
        firstName: "Kentaro",
        lastName: "Miura",
        },
    },
]

console.log(books[0].title);
console.log(books[0].author.firstName);
console.log(books[0].author.lastName);

    /**
     *
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

for (var index = 0; index <= 4; index++)
    {
        console.log("Book # " + (index + 1) + "\n" + "Title: " + books[index].title + "\n" +
            "Author: " + books[index].author.firstName + " " + books[index].author.lastName);
    }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

function createBook(titleName, AuthorName) {

    }

})();