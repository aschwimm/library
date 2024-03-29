const myLibrary = [];
const addButton = document.getElementById("add-book");
const addBookForm = document.getElementById("book-form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages= document.getElementById("pages");
const read = document.getElementById("read");
const container = document.getElementById("container");
const showFormButton = document.getElementById("show-form");
showFormButton.addEventListener("click", () => {
    const displayStatus = addBookForm.style.display;
    if (displayStatus === "block") {
        addBookForm.style.display = "none";
    } else {
        addBookForm.style.display = "block";
    }
})
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
    displayBooks();
    addBookForm.reset();
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
}
function displayBooks() {
    container.innerHTML = "";
    myLibrary.forEach((book) => {
        const bookCard = document.createElement("div");
        for(const prop in book) {
            const entry = document.createElement("div");
            entry.innerHTML = `${prop}: ${book[prop]}`;
            bookCard.append(entry);
        }
        const removeBook = document.createElement("button");
        removeBook.innerHTML = "Remove";
        removeBook.addEventListener("click", () => {
            const index = myLibrary.indexOf(book);
            myLibrary.splice(index, 1);
            displayBooks();
        });
        const markRead = document.createElement("button");
        markRead.innerHTML = "Mark Read";
        markRead.addEventListener("click", () => {
            const index = myLibrary.indexOf(book);
            if (myLibrary[index].read === "Yes") {
                myLibrary[index].read = "No";
            } else {
                myLibrary[index].read = "Yes";
            }
            displayBooks();
        })
        bookCard.append(markRead);
        bookCard.append(removeBook);
        container.append(bookCard);
    })
}
