/*17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests. • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner. • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner. • Print a message to each of the two people still on your list, letting them know they’re still invited. • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */
var guestList = ["Maliha", "Maryam", "Mubeen", "Haya ", "Zumar "];
console.log("Unfortunately ".concat(guestList.splice(3, 1), " can't come So instead of her we are inviting Haneen ").concat(guestList.splice(2, 0, "Haneen")));
guestList.forEach(function (guestList) { return console.log("Hello ".concat(guestList, "! I would like to invite you to dinner on Sunday.")); });
console.log("\nCongragulations. We found a bigger table\n");
console.log("\n********************New List*********************\n");
guestList.unshift("Taliya"); //adding taliya at the begining of array
guestList.push("Ayesha"); //adding ayesha at the end of array
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Baharay"); //adding baharay at the middle of array
guestList.forEach(function (guestList) { return console.log("Hello ".concat(guestList, "! I would like to invite you to dinner on Sunday.")); });
console.log("\nJUST NOW WE RECEIVED A BAD NEWS. WE WON'T GET THE TABLE ON TIME. SO WE HAVE TO INVITE ONLY 2 GUESTS\n");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry I can't invite ".concat(removedGuest, " you to dinner"));
}
console.log("\n Invitation to the last 2 guests");
guestList.forEach(function (guestList) { return console.log("Luckily ".concat(guestList, " you are still invited")); });
guestList.pop();
guestList.pop();
console.log("Empty List ", guestList);
