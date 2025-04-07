document.addEventListener("DOMContentLoaded", loadBooks);

document.getElementById("book-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    if (title === "" || author === "") return;

    const book = { title, author };
    saveBook(book);
    displayBook(book);

    document.getElementById("book-form").reset();
});

function saveBook(book) {
    const books = JSON.parse(localStorage.getItem("books")) || [];
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
}

function loadBooks() {
    const books = JSON.parse(localStorage.getItem("books")) || [];
    books.forEach(displayBook);
}

function displayBook(book) {
    const li = document.createElement("li");
    li.innerHTML = `${book.title} by ${book.author} <button onclick="removeBook(this)">X</button>`;
    document.getElementById("book-list").appendChild(li);
}

function removeBook(button) {
    const li = button.parentElement;
    const title = li.textContent.split(" by ")[0];
    let books = JSON.parse(localStorage.getItem("books")) || [];
    books = books.filter(book => book.title !== title);
    localStorage.setItem("books", JSON.stringify(books));
    li.remove();
}
