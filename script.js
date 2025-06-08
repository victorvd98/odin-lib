const myLibrary = [];

function Book(title, author) { //object constructor
    this.title = title;
    this.author = author;
    this.id = crypto.randomUUID();
    this.read = false;
}

function listLibrary() { //function to list all books in my library

    if (myLibrary.length > 0) {

        for (let i = 0; i < myLibrary.length; i++) {
            const li = document.createElement('li');
            li.textContent = `${myLibrary[i].title} by ${myLibrary[i].author}`;
            document.getElementById("book-list").appendChild(li);
        }
    } else {
        console.log("Library is empty. Please add some books.");
    }
}

function addBookToLibrary(title, author) {  //function to add books to my library
    const book = new Book(title, author);
    myLibrary.push(book);
    listLibrary();
}

const form = document.getElementById('book-form');

