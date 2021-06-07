//var userInput = prompt("Give me an ODD number between 1 and 50");
//for (let number = userInput; number <= 49; number >= 0) {
//    if (number % 2 === 0) {
//        break;
//    }
//}

var oddNumber;

while(true) {
    oddNumber = parseInt(prompt("Enter an odd number between 1 and 50"))
    if (oddNumber % 2 != 0) {
        break;
    }
}
//because you want it to keep asking every time the user puts in an even number, you have to
//put the prompt inside the loop, which I figured out up top, but didn't do it quite right.
//

for (let index = 0; index < 50; index++) {
    if (index == oddNumber) {
        console.log('Yikes! Skipping number ' + index);
        continue;
        //this continue is what runs off the loop because it's the user input number
    }
    if (index % 2 != 0) {
        console.log("Here is an odd number: " + index);
        //this means all other odd numbers are shown in the console.log EXCEPT the one chosen
        //above.
    }
}

// loop review down below

while (true) {
    let odd_Number = prompt('Enter an odd number');
    if (odd_Number == 1) {
        if (odd_Number % 2 == 1) {
            break;
        }
    }
}
