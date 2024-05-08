/*15. Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the
end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still
in your list. */
let guestList: string[]=["Maliha","Maryam","Mubeen","Haya ","Zumar "];
guestList.forEach(guestList=> console.log(`Hello ${guestList}! I would like to invite you to dinner on Sunday.`));
console.log("\n");
console.log(`Unfortunately ${guestList.splice(3,1)} can't come.`);
console.log("So instead of her we are inviting Haneen");
guestList.splice(2,0,"Haneen");
console.log("\n********************New List*********************\n");

guestList.forEach(guestList=> console.log(`Hello ${guestList}! I would like to invite you to dinner on Sunday.`));
