console.log(Math.pow(5,3))
console.log(5 ** 3);

//new syntax

if (true) {
    let bigName = 'Samantha';
}

let bigName = 'Mark'

console.log(bigName);

//

const social = 123456789;
console.log(social);

console.log("I am going to change social");
//social = "987654321"

//next is Template strings

console.log(bigName +` says hi`);
console.log(`$(bigName} says hi`);

let randomNumberHTML = `<p>Your random numer is ${Math.random()}`;

document.querySelector(`body`).innerHTML += randomNumberHTML;

const people = [`Ozzy`, `Christian`, `Hermann`];

let y = 0;
for (let element of people) {
    people.indexOf(element)
    console.log(`This is the index ${people.indexOf(element)}`);
    //console.log(element)
    //console.log(y);
    //y++
}

people.forEach(function (person, index) {
    console.log(`${person}'s index is --> ${index}`);
});

//arrow functions

//function sayHello(name) {
//    return `Hello from ${name}`;
//}

const sayHello = name => `Hello from ${name}`;

//

