<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Book List Tracker</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f7f7f7;
            color: #333;
        }
        h1, h2 {
            text-align: center;
        }
        h1 {
            color: #2c3e50;
            margin-bottom: 30px;
        }
        h2 {
            color: #3498db;
            margin-top: 30px;
        }
        .book-container {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            justify-content: center;
        }
        .category {
            flex: 1;
            min-width: 250px;
            background-color: white;
            border-radius: 8px;
            padding: 15px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .book-list {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }
        .book-item {
            background-color: #f9f9f9;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 4px;
            border-left: 4px solid #3498db;
            transition: all 0.3s ease;
        }
        .completed .book-item {
            border-left-color: #2ecc71;
        }
        .will-read .book-item {
            border-left-color: #f39c12;
        }
        .dropped .book-item {
            border-left-color: #e74c3c;
        }
        .book-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .book-title {
            font-weight: bold;
            display: block;
        }
        .book-author {
            font-style: italic;
            color: #666;
            font-size: 0.9em;
        }
        .book-form {
            margin-top: 20px;
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .form-group {
            margin-bottom: 15px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        input, select {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        button {
            background-color: #3498db;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        button:hover {
            background-color: #2980b9;
        }
        .delete-btn {
            background-color: #e74c3c;
            color: white;
            border: none;
            padding: 2px 6px;
            border-radius: 3px;
            cursor: pointer;
            float: right;
            font-size: 12px;
        }
        .delete-btn:hover {
            background-color: #c0392b;
        }
    </style>
</head>
<body>
    <h1>My Book List Tracker</h1>
    
    <div class="book-form">
        <h2>Add New Book</h2>
        <div class="form-group">
            <label for="book-title">Book Title</label>
            <input type="text" id="book-title" placeholder="Enter book title">
        </div>
        <div class="form-group">
            <label for="book-author">Author</label>
            <input type="text" id="book-author" placeholder="Enter author name">
        </div>
        <div class="form-group">
            <label for="book-category">Category</label>
            <select id="book-category">
                <option value="completed">Completed</option>
                <option value="will-read">Will Read</option>
                <option value="dropped">Dropped</option>
            </select>
        </div>
        <button onclick="addBook()">Add Book</button>
    </div>

    <div class="book-container">
        <div class="category completed">
            <h2>Completed</h2>
            <ul class="book-list" id="completed-list">
                <li class="book-item">
                    <span class="book-title">To Kill a Mockingbird</span>
                    <span class="book-author">Harper Lee</span>
                    <button class="delete-btn" onclick="deleteBook(this)">X</button>
                </li>
                <li class="book-item">
                    <span class="book-title">1984</span>
                    <span class="book-author">George Orwell</span>
                    <button class="delete-btn" onclick="deleteBook(this)">X</button>
                </li>
            </ul>
        </div>

        <div class="category will-read">
            <h2>Will Read</h2>
            <ul class="book-list" id="will-read-list">
                <li class="book-item">
                    <span class="book-title">The Great Gatsby</span>
                    <span class="book-author">F. Scott Fitzgerald</span>
                    <button class="delete-btn" onclick="deleteBook(this)">X</button>
                </li>
                <li class="book-item">
                    <span class="book-title">Brave New World</span>
                    <span class="book-author">Aldous Huxley</span>
                    <button class="delete-btn" onclick="deleteBook(this)">X</button>
                </li>
            </ul>
        </div>

        <div class="category dropped">
            <h2>Dropped</h2>
            <ul class="book-list" id="dropped-list">
                <li class="book-item">
                    <span class="book-title">Ulysses</span>
                    <span class="book-author">James Joyce</span>
                    <button class="delete-btn" onclick="deleteBook(this)">X</button>
                </li>
            </ul>
        </div>
    </div>

    <script>
        // Load saved books from local storage when page loads
        window.onload = function() {
            loadBooks();
        };

        // Add a new book to the appropriate list
        function addBook() {
            const title = document.getElementById('book-title').value.trim();
            const author = document.getElementById('book-author').value.trim();
            const category = document.getElementById('book-category').value;
            
            if (title === '') {
                alert('Please enter a book title');
                return;
            }
            
            const bookItem = document.createElement('li');
            bookItem.className = 'book-item';
            
            const titleSpan = document.createElement('span');
            titleSpan.className = 'book-title';
            titleSpan.textContent = title;
            
            const authorSpan = document.createElement('span');
            authorSpan.className = 'book-author';
            authorSpan.textContent = author;
            
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = 'X';
            deleteBtn.onclick = function() {
                deleteBook(this);
            };
            
            bookItem.appendChild(titleSpan);
            bookItem.appendChild(authorSpan);
            bookItem.appendChild(deleteBtn);
            
            document.getElementById(`${category}-list`).appendChild(bookItem);
            
            // Clear form fields after adding
            document.getElementById('book-title').value = '';
            document.getElementById('book-author').value = '';
            
            // Save to local storage
            saveBooks();
        }
        
        // Delete a book from a list
        function deleteBook(button) {
            const bookItem = button.parentElement;
            bookItem.remove();
            
            // Save the updated lists to local storage
            saveBooks();
        }
        
        // Save all books to local storage
        function saveBooks() {
            const books = {
                completed: getBooksFromList('completed-list'),
                willRead: getBooksFromList('will-read-list'),
                dropped: getBooksFromList('dropped-list')
            };
            
            localStorage.setItem('bookList', JSON.stringify(books));
        }
        
        // Helper function to extract books from a list
        function getBooksFromList(listId) {
            const list = document.getElementById(listId);
            const books = [];
            
            for (const item of list.children) {
                const title = item.querySelector('.book-title').textContent;
                const author = item.querySelector('.book-author').textContent;
                books.push({ title, author });
            }
            
            return books;
        }
        
        // Load books from local storage
        function loadBooks() {
            const savedBooks = localStorage.getItem('bookList');
            
            if (savedBooks) {
                const books = JSON.parse(savedBooks);
                
                // Clear default books
                document.getElementById('completed-list').innerHTML = '';
                document.getElementById('will-read-list').innerHTML = '';
                document.getElementById('dropped-list').innerHTML = '';
                
                // Load completed books
                books.completed.forEach(book => {
                    addSavedBook(book.title, book.author, 'completed-list');
                });
                
                // Load will-read books
                books.willRead.forEach(book => {
                    addSavedBook(book.title, book.author, 'will-read-list');
                });
                
                // Load dropped books
                books.dropped.forEach(book => {
                    addSavedBook(book.title, book.author, 'dropped-list');
                });
            }
        }
        
        // Helper function to add a saved book to a list
        function addSavedBook(title, author, listId) {
            const bookItem = document.createElement('li');
            bookItem.className = 'book-item';
            
            const titleSpan = document.createElement('span');
            titleSpan.className = 'book-title';
            titleSpan.textContent = title;
            
            const authorSpan = document.createElement('span');
            authorSpan.className = 'book-author';
            authorSpan.textContent = author;
            
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = 'X';
            deleteBtn.onclick = function() {
                deleteBook(this);
            };
            
            bookItem.appendChild(titleSpan);
            bookItem.appendChild(authorSpan);
            bookItem.appendChild(deleteBtn);
            
            document.getElementById(listId).appendChild(bookItem);
        }
    </script>
</body>
</html>
