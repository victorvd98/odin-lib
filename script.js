const myLibrary = [];

function listLibrary() { //function to list all books in my library in HTML

    if (myLibrary.length > 0) {

        for (let i = 0; i < myLibrary.length; i++) {
            const li = document.createElement('li');
            li.textContent = `${myLibrary[i].title} by ${myLibrary[i].author}`; //template literals
            document.getElementById("book-list").appendChild(li);
        }
    } else {
        console.log("Library is empty. Please add some books.");
    }
}

function Book(title, author) { //object constructor
    this.title = title;
    this.author = author;
    this.id = crypto.randomUUID();
    this.read = false;
}

function addBookToLibrary(title, author) {  //function to add books to my library
    const book = new Book(title, author);
    myLibrary.push(book);
    listLibrary();
}

const form = document.getElementById('add-book');

form.addEventListener('submit', e => {
    e.preventDefault(); //prevent page from refreshing / other default actions by browser
    const formTitle = document.getElementById('title').value;
    const formAuthor = document.getElementById('author').value;
    addBookToLibrary(formTitle, formAuthor);
});

