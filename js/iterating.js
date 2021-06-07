(function(){
    "use strict";

    /**
     *
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ['Rosco', 'Ash', 'Emmy', 'Patches'];

    /**
     *
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log('There are ' + names.length + ' names in the names variable.');

    /**
     *
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log('The first name is ' + names[0]);
    console.log('The second name is ' + names[1]);
    console.log('The third name is ' + names[2]);
    console.log('The fourth name is ' + names[3]);

    /**
     *
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

for (var namesLog = 0; namesLog < names.length; namesLog++) {
    console.log('The name at index ' + namesLog + ' is ' + names[namesLog]);
}
    /**
     *
     * Refactor your above code to use a `forEach` loop
     */

names.forEach(function(name) {
    console.log('Here\'s a name: ' + name);
});

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

function name1(newNames) {
    return newNames[0];
}

var nameList = ['a', 'b', 'c', 'd'];

var firstName = name1(nameList);

console.log(firstName)

})();

//this was my own practice stuff below

var shapes = ['square', 'rectangle', 'circle', 'triangle'];


//loop through the array and log the values
for (var i = 0; i < shapes.length; i++) {
    console.log('The shape at index ' + i + ' is ' + shapes[i]);
}

//So the loop is going up by one due to 'i++,' runs until i >= shapes.length(4),
//and the console.log finds the location variable 'i' is at and 'shapes[i] calls
//the shape at that iteration.