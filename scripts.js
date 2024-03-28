const myLibrary = [];
const addButton = document.getElementById("add-book");
const addBookForm = document.getElementById("book-form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages= document.getElementById("pages");
const read = document.getElementById("read");
const container = document.getElementById("container");

addButton.addEventListener("click", (event) => {
    event.preventDefault();
    const newBook = new Book();
    if(read.value === "on") {
        read.value = "Yes";
    } else {
        read.value = "No";
    }
    newBook.title = title.value;
    newBook.author = author.value;
    newBook.pages = pages.value;
    newBook.read = read.value;
    addBookToLibrary(newBook);
    console.log(newBook);
    console.log(myLibrary);
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    const bookCard = document.createElement("div");
    for(const prop in book) {  
        const entry = document.createElement("div");
        entry.innerHTML = `${prop}: ${book[prop]}`;
        bookCard.append(entry);
    }
    container.append(bookCard);
}
