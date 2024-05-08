/* 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:*/
let car = "car";
let uppercaseCar = "CAR";
let ten = 10;
let twenty=20;
let carNames:String[]=["BMW","Ferari","Lamborgini","Bugatti"];
// • Tests for equality and inequality with strings?
console.log("Is car equal to car?");
console.log(car == "car");
console.log("\nIs car not equal to car?");
console.log(car != "car");

// • Tests using the lower case function
console.log("Is CAR equal to car after converting to lower case");
console.log(uppercaseCar.toLowerCase()=="car");
console.log("Is CAR not equal to car after converting to lower case");
console.log(uppercaseCar.toLowerCase()!="car");

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is ten equal to twenty?");
console.log(ten==twenty);
console.log("Is ten not equal to twenty?");
console.log(ten!=twenty);
console.log("Is ten less than twenty?");
console.log(ten<twenty);
console.log("Is ten greater than twenty?");
console.log(ten>twenty);
console.log("Is ten greater than or equal to twenty?");
console.log(ten>=twenty);
console.log("Is ten less than or equal to twenty?");
console.log(ten<=twenty);


// • Tests using "and" and "or" operators
console.log("Is ten less than twenty or not equal to twenty?");
console.log(ten<twenty || ten!=twenty);
console.log("Is ten less than twenty && not equal to twenty?");
console.log(ten<twenty && ten!=twenty);

// • Test whether an item is in a array
console.log("Is Ferari included in array?");
console.log(carNames.includes("Ferari"));
// • Test whether an item is not in a array*/
console.log("Is Ferari included in array?");
console.log(carNames.includes("porche"));
