/*3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/
let personName:string="maryam Bano";
console.log("Name: ",personName);
console.log("Name in lowercase: ",personName.toLowerCase());
console.log("Name in uppercase: ",personName.toUpperCase());
console.log("Name in titlecase: ",personName.replace(/\b\w/g, z => z.toUpperCase()));
