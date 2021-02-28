function my_Dictionary() { // define function
    var Book = { //name variable
        Genre:"Horror", //declare kvp's
        Title:"IT",
        Author:"Stephen King",
        Pages:300
    };
    delete Book.Pages; //deleting this from dictionary
    document.getElementById("Dictionary").innerHTML = Book.Pages; //assigning value of book.pages to the element "Dictionary"
}