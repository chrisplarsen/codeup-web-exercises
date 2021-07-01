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
