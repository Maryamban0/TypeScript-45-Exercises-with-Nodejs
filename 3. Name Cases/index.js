"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/
//for making variable w we use the keyword let
let personName = "maryam Bano";
console.log("Name: ", personName);
console.log("Name in lowercase: ", personName.toLowerCase());
console.log("Name in uppercase: ", personName.toUpperCase());
console.log("Name in titlecase: ", personName.replace(/\b\w/g, z => z.toUpperCase()));
//replace ka method use karrai hein. replace ka method regular expression or aik arrow function k through use kartay hein /\b\w/g ye hai regular expression, rigis. hm, rigis  ko use kartay hein kyuki ye string k har word k phly character ko match karta hy. ab ye match kar k z mai save krege. phir hmney arrow function banai. ab z mai jo bhi hai wo string matlab maryam aur bano k phly character ko lega aur uppercase mai krdega 
