//yee yee I can't see

function showMultiplicationTable(input) {
    for (let y = 0; y <= 10; y++)
    console.log(input + " x " + y + " = " + (input*y));
}
showMultiplicationTable(7);

for (let ev = 0; ev < 10; ev++){
    let random = Math.ceil(Math.random() * (200 - 20) + 20);
    if (random % 2 !== 0){
        console.log(random * "is odd");}
    else {
        console.log(random * "is even")
    }
}

function tree() {
    for (let x = 1; x < 10; x++) {
        var number = x;
        for (let y = 1; y < x; y++) {
            number = number + x.toString();
        } console.log(number.toString())
    } //console.log(number.toString())
}

tree()

for (let y = 1; y <= 10; y++) {
    console.log(x + "x" + y + "=" + (x * y))
}

for (var index = 1, number = ""; index < 10; index++){
    number += "1";
    console.log(index * number)
}