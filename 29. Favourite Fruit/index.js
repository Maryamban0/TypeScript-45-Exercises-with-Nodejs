"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits = ["Mango", "PineApple", "Watermelon"];
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!
if (favorite_fruits.includes("Mango")) {
    console.log("I really like mango");
}
if (favorite_fruits.includes("Watermelon")) {
    console.log("I really like Watermelon");
}
if (favorite_fruits.includes("PineApple")) {
    console.log("I really like PineApple");
}
if (favorite_fruits.includes("Grapes")) {
    console.log("I really like grapes");
}
if (favorite_fruits.includes("Kiwi")) {
    console.log("I really like kiwi");
}
