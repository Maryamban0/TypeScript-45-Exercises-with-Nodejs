/*16. More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list. */

let guestList: string[]=["Maliha","Maryam","Mubeen","Haya ","Zumar "];
console.log(`Unfortunately ${guestList.splice(3,1)} can't come So instead of her we are inviting Haneen ${guestList.splice(2,0,"Haneen")}`);

guestList.forEach(guestList=> console.log(`Hello ${guestList}! I would like to invite you to dinner on Sunday.`));
console.log("\nCongragulations. We found a bigger table\n");

console.log("\n********************New List*********************\n");
guestList.unshift("Taliya");//adding taliya at the begining of array
guestList.push("Ayesha");//adding taliya at the end of array
let middleIndex = Math.floor(guestList.length /2 );
guestList.splice(middleIndex,0,"Baharay");
guestList.forEach(guestList=> console.log(`Hello ${guestList}! I would like to invite you to dinner on Sunday.`));
