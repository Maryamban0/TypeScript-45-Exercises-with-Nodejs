/*44. Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time. */
function Sandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items: \n");
        items.forEach(Item => console.log(Item));
        console.log("\nYour sandwich is ready");    
}
Sandwich("Chicken", "Cheese", "Mayonaise", "ketchup");
Sandwich("Cheese", "beef");
Sandwich("Ketchup", "Butter", "Mayo", "Cheese", "Chicken");