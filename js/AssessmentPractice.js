function max(arrayOfNumbers) {
    return Math.max(...arrayOfNumbers);
}

//

var students = [
    {
        name: "Phil Rundy",
        classAverage: 53,
    },
    {
        name: "Samuel Moore",
        classAverage: 71,
    },
    {
        name: "Mark Tendly",
        classAverage: 84,
    },
    {
        name: "Dough Mush",
        classAverage: 99,
    },
    {
        name: "Bran Thoeb",
        classAverage: 69,
    },
    {
        name: "Mario Yoshi",
        classAverage: 75,
    },
    {
        name: "Nathan Skywalker",
        classAverage: 16,
    }
]

function whoIsPassing(arrayOfStudents) {
    var passingResults = [];
    for (let i = 0; i < arrayOfStudents.length; i++) {
        if (arrayOfStudents[i].classAverage >= 60) {
            //this means they passed
            passingResults.push(
                {
                    name: arrayOfStudents[i].name,
                    passing: true,
                }
            )
        } else {
            //this means the student is failing
            passingResults.push(
                {
                    name: arrayOfStudents[i].name,
                    passing: false,
                }
            )
        }
    }
    return passingResults;
}

console.log(whoIsPassing(students));

//

function dateStringToObject(string) {
    var splitString = string.split("-")
    return {month: splitString[1], day: splitString[2], year: splitString[0]}
}

console.log(dateStringToObject("2016-3-15"));

//

function reverseString(string) {
    var revString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        revString += string.charAt(i);
    }
    return revString;
}

console.log(reverseString("squid"));

//

function numberInfo(number){
    var isNumberPositive = (number > 0);
    var isNumberEven = (number % 2 === 0);
    var isNumberZero = (number === 0);

    return {
        isPositive: isNumberPositive,
        isEven: isNumberEven,
        isZero: isNumberZero
    }
}

console.log(numberInfo(-2));

//

function removeDuplicates(arrayOfStrings) {
    return [...new Set(arrayOfStrings)];
}

//var uniqueString = [];
//
//for(let i = 0; i < arrayOfStrings.length; i++) {
//    if (uniqueStrings.includes(arrayOfStrings[i])){
//    } else {
//        uniqueStrings.push(arrayOfStrings[i])
//    }
//}

//
function mostOccuringNumber(numbers) {
    var counts = [];
    for (let i = 0; i < numbers.length; i++) {
        var aNumber = numbers[i];
        if(counts[aNumber] === undefined) {
            counts[aNumber] = 1;
        } else {
            counts[aNumber]++;
        }
    }
    console.log(counts);
}

console.log(mostOccuringNumber([8,93,28,8,27,-62,32,8,-62]));