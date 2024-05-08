/*10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write
because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence
describing what the program does.*/
/*PROGRAM1*/
/*Okay so this is the code of my third question*/
var personName = "maryam Bano";
console.log("Name: ", personName); //it will print the above personName without any changes
console.log("Name in lowercase: ", personName.toLowerCase()); //by using toLowerCase() function, we will capitalize each word of the string.
console.log("Name in uppercase: ", personName.toUpperCase()); //by using toUpperCase() function, we will capitalize each word of the string.
/*the below code is for changing the name to title case. This is done by using the rename function which will use a regular expression which will take only the first letter of every wrd of string, then we will store it in variable z. then we will use an arrow function. then the variable z whih contain all the first letters of every word of string will capitalize each word through toUpperCase() function for making it a titlecase*/
console.log("Name in titlecase: ", personName.replace(/\b\w/g, function (z) { return z.toUpperCase(); }));
/*PROGRAM2*/
/*this is the code of my SECOND question*/
var person = "Eric"; //we created a variable person through let keyword.it stores a string Eric
console.log("Hello ".concat(person, ", would you like to learn some Python today?"));
//it simple prints a message and a name by type literal. 
