//create book class
class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//create UI class to handle UI

const values = document.querySelector("#book-form").addEventListener('submit', (e)=>{
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
    let book = new Book(title, author, isbn);
    console.log(book);
    
    // return console.log(`Title is ${title} author name is ${author} and isbn number is ${isbn}`)
})


//create sorage class - Handle data in local storage


//Event:Add a book


//Event: Display a book


//Event: Remove a book












