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