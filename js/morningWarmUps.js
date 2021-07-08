// TODO: Create a function named countSpaces that accepts a string and returns the total number of spaces in the string.

function countSpaces(count) {
    if (typeof count !== "string" || typeof count === "number") {
        return false;
    } else
        var totalNumber = (count.match(/ /g) || []).length;
    console.log(totalNumber)
}

// TODO: Add validation to function above, if the argument pass is not a string it should return false.

countSpaces("whacky kids eat shit all the time");
countSpaces("codeup");
countSpaces("idek if this is correct");
countSpaces(0);
countSpaces(NaN);
countSpaces();

// July 6th 2021
// TODO: Create a function named capitalizeAllNames that accepts an array of strings and returns the array with all of its elements capitalized.
// Example:  capitalizeAllNames(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["BOB","SETH","TOFU","TOYOTA"]
function capitalizeAllNames(index) {
    //return index.toUpperCase()
    var allCapsArray = []
}

capitalizeAllNames(["bob", "Seth", "TOFU", "Toyota"]);
// TODO: Create a function named capitalizeFirstLetter that accepts an array of strings and returns the array with all of the first letters in
//  each string being capitalized while having the rest of the string lowercase look at the example below for reference.
// Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["Bob","Seth","Tofu","Toyota"]
function capitalizeFirstLetter(index2) {
    index2.split(",");
    for (var i = 0; i < index2.length; i++) {
        index2[i] = index2[i].charAt(0).toUpperCase() + index2[i].slice(1);

    }
    index2.join(",")
}

capitalizeFirstLetter(["bob", "Seth", "TOFU", "Toyota"]);

// July 7th 2021
// TODO: Create a method on the object down below named getFullName that when called returns the users full name using the "this" key term.
// Example: personOne.getFullName() ---- returns ----> "silvia floopertan"
var personOne = {
    firstName: "silvia",
    lastName: "floopertan",
    ageInYears: 34,
    heightInInches: 65,
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
// TODO: Create a method on the object down below named getNicelyFormattedFullName that when called returns the
//  users full name with both first letters in the names being capitalized look at example down below for more reference.
// Example: personOne.getNicelyFormattedFullName() ---- returns ----> "Dan Valdarez"
var personTwo = {
    firstName: "Dan",
    lastName: "Valdarez",
    ageInYears: 61,
    heightInInches: 73,
    getNicelyFormattedFullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

function getNicelyFormattedFullName () {
    return personTwo.firstName + " " + personTwo.lastName;
}
// TODO: Create a method on the object below that gives us the behavior that the example implies.
// Example: personThree.intro() ---- returns ----> "Hello, My name is Arlene Martinez and I am 25 years old"
var personThree = {
    firstName: "arlene",
    lastName: "martinez",
    ageInYears: 25,
    heightInInches: 62,
    personThreeIntro: function () {
        return "Hello, My name is " + this.firstName + " " + pthis.lastName + " and I am " + this.age
            + " years old.";
    }
}

// July 8th 2021
// Part 1
// TODO: Create a function that takes an array of strings and returns an array of objects
//  where each object has 2 properties: originalString and countOfLetters
// Example: input: ["hello", "dave"]
//          returns: [
//                    { "originalString":"hello", lengthOfOriginalString:5 },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                   ]

function arraysToObjects(index) {
    var notSureOnName = {}
        notSureOnName.originalString = index;
        notSureOnName.countOfLetters = index.length;
}
console.log(arraysToObjects);

// Part 2
// TODO: Create a function that takes the array of objects from PART 1
//  and returns a string of all of the originalStrings concatenated with spaces in between
// Example: input: [
//                    { "originalString":"hello", lengthOfOriginalString:5 },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                  ]
//          returns: "hello dave"

function arrayToConString (index) {
    return object.originalString
}
// TODO: Create a function named getTallUsers that accepts an array of objects. The objects in the array will be in the same format
//  as PersonOne, PersonTwo, and PersonThree. The functions job is to return an array of users that have heightInInches equal to or greater than 65.
var people = [personOne,personTwo,personThree];
// Example: getTallUsers(people)
// ---- returns ----> [{firstName: "silvia", lastName: "floopertan", ageInYears: 34, heightInInches: 65},
//

function getTallUsers (index) {
    for (i = 0; i <= index.length - 1; i++);
        if (index.heightInInches >= 65) {
            return index;
        }
}

console.log(getTallUsers);





