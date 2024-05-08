/*41. Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array. */
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
var magician_names = ["Harry Potter", "Taliya", "Jadugar"];
show_magicians(magician_names);
