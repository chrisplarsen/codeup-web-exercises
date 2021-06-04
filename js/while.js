var condition = 1; //our variable

while (true) { //while the following is true
    condition = condition * 2; //we will multiple our variable * 2 while true
    if (condition > 65536) { //remains true until variable is greater than 65536
        break; //jumps out of the loop once we clear our IF statement
    }console.log(condition) //returns our numbers on the console
//    console.log('while iteration #' + condition);
//    condition * 2;
}