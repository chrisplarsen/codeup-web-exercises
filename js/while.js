var condition = 1; //our variable

while (true) { //while the following is true
    condition = condition * 2; //we will multiple our variable * 2 while true
    if (condition > 65536) { //remains true until variable is greater than 65536
        break; //jumps out of the loop once we clear our IF statement
    }console.log(condition) //returns our numbers on the console
//    console.log('while iteration #' + condition);
//    condition * 2;
}

//next is my Do While Loop

//var numberOfCones = Math.ceil(Math.random() * 50) + 50;
//
//do {
//    var conesSold = Math.floor(Math.random() * 5) + 1;
//    numberOfCones - conesSold
//} while (numberOfCones > 0);

//teacher walk through below

let totalSales = Math.ceil(Math.random() * (100-50) + 50);
console.log(totalSales);

let totalSold = 0;

do {
    let conesBought = Math.ceil(Math.random() * (5 - 1) + 1);
    if ((totalSold + conesBought) > totalSales) {
        console.log("Sorry I can't sell " + conesBought);
        continue;
    }
    console.log("my customer bought " + conesBought);
    totalSold = totalSold + conesBought;
    console.log("I've sold this many: " + totalSold);
} while (totalSold < totalSales);