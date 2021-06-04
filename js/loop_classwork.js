//whacky fun time with loops

var message = '';

var howMany = prompt('how many?');

for (let index = 0; index <= howMany; index++) {
    message = message + index + '\n';

}

alert(message);

alert(index);
//line 12 won't do anything because I put let index inside the loop