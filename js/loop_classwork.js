//whacky fun time with loops

//var message = '';

//var howMany = prompt('how many?');

//for (let index = 0; index <= howMany; index++) {
//   message = message + index + '\n';

//}

//alert(message);

//alert(index);
//line 12 won't do anything because I put let index inside the loop

for (var index = 0; index < 10; index++)
{
    //do something
    alert("index: " + index + '\n');
}

var index = 0
//line 23 resets our variable to zero so the next loop activates again

while(index < 10) {
    //do something
    alert("index: " + index + '\n');
    index++;
}

var notDone = true; //loop?

while (notDone) {
    notDone = confirm("Wanna go again?");
}

//comment out above code before running bottom code.

notDone = true;

do{
    //do stuff
    alert("doing stuff");
    notDone = confirm("again?")
} while(notDone);

var badData = false;

function validateNumber() {
    do {
        var value = prompt("enter a number");
        badData = typeof (value) != "number";
        while (badData) ;
    }
    return value;
}

var number = 0;

while(true) {
    alert("one alert before break");
    number++;
    if (number > 2) {
        break;
    }
}

for(var i = 1; i < 100; i++) {
    if (i % 2 !== 0) {
        continue;
    }
console.log("Sabes que no tenemos pero");
}