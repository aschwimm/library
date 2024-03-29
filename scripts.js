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
    if(read.value === "on") {
        read.value = "Yes";
    } else {
        read.value = "No";
    }
    const newBook = new Book(title.value, author.value, pages.value, read.value);
    addBookToLibrary(newBook);
    displayBooks();
    addBookForm.reset();
    console.log(myLibrary);
});

function Book(title, author, pages, read) {
  this.Title = title;
  this.Author = author;
  this.Pages = pages;
  this.Read = read;
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
            entry.innerHTML = `<strong>${prop}</strong>: ${book[prop]}`;
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
            if (myLibrary[index].Read === "Yes") {
                myLibrary[index].Read = "No";
            } else {
                myLibrary[index].Read = "Yes";
            }
            displayBooks();
        })
        bookCard.append(markRead);
        bookCard.append(removeBook);
        container.append(bookCard);
    })
}
