/*43. Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.*/

function show_magicians(magicians: string[]){
    magicians.forEach(name=>console.log(name));
}
function make_great(magicians:string[]){
    return magicians.map(name => `The Great ${name}`)
}
//giving values to array
let magician_names = ["Harry Potter","Taliya","Jadugar"];
//making copy of array through sliced function
let copyMagicianNames = magician_names.slice();
//changing copied array by adding "The great" with there names
let copy_make_great=make_great(copyMagicianNames);
//Original
show_magicians(magician_names);
//Copied 
show_magicians(copy_make_great);