// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.
function make_shirt(size:string,printMessage:String){
    console.log(`You selected ${size} size shirt with ${printMessage} message on shirt`);
}
make_shirt("Large","Stay Happy");
make_shirt("Small","Exams Soon");