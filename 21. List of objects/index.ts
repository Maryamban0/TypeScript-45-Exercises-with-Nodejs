/*21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.*/
interface book{
    bookName: string;
    price: number;
    writer:string;
    pages:string;
}
let book = {
    bookName: "Mai Anmol",
    price: 2000,
    writer: "Nimra Ahmed",
    pages: 700,
}
console.log(book);