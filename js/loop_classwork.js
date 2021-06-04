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
//line 23 resets our variable to zero so the next loop actiates again

while(index < 10) {
    //do something
    alert("index: " + index + '\n');
    index++;
}