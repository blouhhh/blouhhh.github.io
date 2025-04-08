<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Collection</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Roboto Mono', 'Courier New', monospace;
        }
        
        body {
            background-image: url('/api/placeholder/1200/800');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            min-height: 100vh;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        /* Tabs styling */
        .tabs {
            display: flex;
            background-color: #333333;
            overflow: hidden;
            margin-bottom: 20px;
        }
        
        .tab-button {
            background-color: transparent;
            border: none;
            outline: none;
            cursor: pointer;
            padding: 20px 0;
            flex: 1;
            font-size: 24px;
            font-weight: bold;
            color: white;
            transition: background-color 0.3s ease;
            letter-spacing: 1px;
        }
        
        .tab-button.active {
            box-shadow: inset 0 0 0 4px #999999;
        }
        
        .tab-button:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
        
        /* Tab content */
        .tab-content {
            display: none;
            background-color: rgba(0, 0, 0, 0.5);
            min-height: calc(100vh - 140px);
            padding: 20px;
        }
        
        .tab-content.active {
            display: block;
        }
        
        /* Book cards */
        .books-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }
        
        .book-card {
            background-color: #666666;
            width: 220px;
            padding: 15px;
            border-radius: 3px;
            display: flex;
            color: white;
        }
        
        .book-info {
            flex: 1;
        }
        
        .book-title {
            font-weight: bold;
            font-size: 18px;
            margin-bottom: 5px;
        }
        
        .book-author {
            color: #dddddd;
            font-size: 14px;
        }
        
        .book-image {
            width: 80px;
            height: 100px;
            background-color: #444444;
            margin-left: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #aaaaaa;
        }
        
        /* Add book form */
        .add-book-form {
            background-color: #555555;
            padding: 20px;
            margin-bottom: 20px;
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            color: white;
        }
        
        .form-group {
            flex: 1;
            min-width: 200px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        .form-group input, .form-group select {
            width: 100%;
            padding: 8px;
            border: 1px solid #777777;
            background-color: #444444;
            color: white;
            font-family: 'Roboto Mono', 'Courier New', monospace;
        }
        
        .form-button {
            background-color: #333333;
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            font-weight: bold;
            align-self: flex-end;
            font-family: 'Roboto Mono', 'Courier New', monospace;
        }
        
        .form-button:hover {
            background-color: #222222;
        }
        
        .upload-button {
            background-color: #444444;
            color: white;
            border: none;
            padding: 8px;
            cursor: pointer;
            width: 100%;
            margin-top: 5px;
            font-family: 'Roboto Mono', 'Courier New', monospace;
        }
        
        .delete-button {
            background-color: #444444;
            color: white;
            border: none;
            padding: 3px 8px;
            font-size: 12px;
            cursor: pointer;
            display: block;
            margin-top: 10px;
            font-family: 'Roboto Mono', 'Courier New', monospace;
        }
        
        /* Custom file input */
        .file-input-container {
            position: relative;
            overflow: hidden;
            display: inline-block;
        }
        
        .file-input {
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0;
            cursor: pointer;
            width: 100%;
            height: 100%;
        }
        
        #file-name {
            color: #bbbbbb;
            font-size: 12px;
            display: block;
            margin-top: 5px;
        }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <!-- Tab navigation -->
        <div class="tabs">
            <button class="tab-button active" onclick="openTab('completed')">Completed</button>
            <button class="tab-button" onclick="openTab('to-read')">To Read</button>
            <button class="tab-button" onclick="openTab('dropped')">Dropped</button>
        </div>
        
        <!-- Add book form -->
        <div class="add-book-form">
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
                    <option value="to-read">To Read</option>
                    <option value="dropped">Dropped</option>
                </select>
            </div>
            <div class="form-group">
                <label for="book-image">Book Cover (Optional)</label>
                <div class="file-input-container">
                    <button class="upload-button">Choose Image</button>
                    <input type="file" id="book-image" class="file-input" accept="image/*">
                </div>
                <span id="file-name">No file chosen</span>
            </div>
            <button class="form-button" onclick="addBook()">Add Book</button>
        </div>
        
        <!-- Tab content -->
        <div id="completed" class="tab-content active">
            <div class="books-container" id="completed-books">
                <!-- Books will be added here -->
            </div>
        </div>
        
        <div id="to-read" class="tab-content">
            <div class="books-container" id="to-read-books">
                <!-- Books will be added here -->
            </div>
        </div>
        
        <div id="dropped" class="tab-content">
            <div class="books-container" id="dropped-books">
                <!-- Books will be added here -->
            </div>
        </div>
    </div>

    <script>
        // Sample data to start with
        const sampleBooks = {
            completed: [
                { title: "To Kill a Mockingbird", author: "Harper Lee", image: null },
                { title: "1984", author: "George Orwell", image: null }
            ],
            toRead: [
                { title: "The Great Gatsby", author: "F. Scott Fitzgerald", image: null },
                { title: "Brave New World", author: "Aldous Huxley", image: null }
            ],
            dropped: [
                { title: "Ulysses", author: "James Joyce", image: null }
            ]
        };

        // Initialize when the page loads
        window.onload = function() {
            // Handle file input display
            document.getElementById('book-image').addEventListener('change', function() {
                const fileName = this.files[0] ? this.files[0].name : 'No file chosen';
                document.getElementById('file-name').textContent = fileName;
            });
            
            // Load books from localStorage or use sample books
            loadBooks();
            
            // Show the active tab
            openTab('completed');
        };

        // Open a tab and hide others
        function openTab(tabName) {
            const tabContents = document.getElementsByClassName('tab-content');
            for (let i = 0; i < tabContents.length; i++) {
                tabContents[i].classList.remove('active');
            }
            
            const tabButtons = document.getElementsByClassName('tab-button');
            for (let i = 0; i < tabButtons.length; i++) {
                tabButtons[i].classList.remove('active');
            }
            
            document.getElementById(tabName).classList.add('active');
            
            // Find the button that opened this tab and add the active class
            const buttons = document.getElementsByClassName('tab-button');
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i].textContent.toLowerCase().includes(tabName.replace('-', ' '))) {
                    buttons[i].classList.add('active');
                    break;
                }
            }
        }

        // Add a new book
        function addBook() {
            const title = document.getElementById('book-title').value.trim();
            const author = document.getElementById('book-author').value.trim();
            const category = document.getElementById('book-category').value;
            const fileInput = document.getElementById('book-image');
            let imageDataUrl = null;
            
            if (!title) {
                alert('Please enter a book title');
                return;
            }
            
            // If there's a file, read it as data URL
            if (fileInput.files && fileInput.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    imageDataUrl = e.target.result;
                    createBookCard(title, author, category, imageDataUrl);
                    saveBooks();
                };
                reader.readAsDataURL(fileInput.files[0]);
            } else {
                createBookCard(title, author, category, null);
                saveBooks();
            }
            
            // Clear the form
            document.getElementById('book-title').value = '';
            document.getElementById('book-author').value = '';
            document.getElementById('file-name').textContent = 'No file chosen';
            fileInput.value = '';
        }

        // Create a book card and add it to the appropriate container
        function createBookCard(title, author, category, imageDataUrl) {
            const bookCard = document.createElement('div');
            bookCard.className = 'book-card';
            
            const bookInfo = document.createElement('div');
            bookInfo.className = 'book-info';
            
            const bookTitle = document.createElement('div');
            bookTitle.className = 'book-title';
            bookTitle.textContent = title;
            
            const bookAuthor = document.createElement('div');
            bookAuthor.className = 'book-author';
            bookAuthor.textContent = author;
            
            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-button';
            deleteButton.textContent = 'Remove';
            deleteButton.onclick = function() {
                bookCard.remove();
                saveBooks();
            };
            
            bookInfo.appendChild(bookTitle);
            bookInfo.appendChild(bookAuthor);
            bookInfo.appendChild(deleteButton);
            
            const bookImage = document.createElement('div');
            bookImage.className = 'book-image';
            
            if (imageDataUrl) {
                const img = document.createElement('img');
                img.src = imageDataUrl;
                img.style.maxWidth = '100%';
                img.style.maxHeight = '100%';
                bookImage.appendChild(img);
            } else {
                bookImage.textContent = 'Image';
            }
            
            bookCard.appendChild(bookInfo);
            bookCard.appendChild(bookImage);
            
            // Get the appropriate container and add the book card
            const containerId = category === 'to-read' ? 'to-read-books' :
                              category === 'dropped' ? 'dropped-books' : 'completed-books';
            document.getElementById(containerId).appendChild(bookCard);
        }

        // Save books to localStorage
        function saveBooks() {
            const books = {
                completed: getBooksFromContainer('completed-books'),
                toRead: getBooksFromContainer('to-read-books'),
                dropped: getBooksFromContainer('dropped-books')
            };
            
            localStorage.setItem('myBookList', JSON.stringify(books));
        }

        // Get books from a container
        function getBooksFromContainer(containerId) {
            const container = document.getElementById(containerId);
            const bookCards = container.getElementsByClassName('book-card');
            const books = [];
            
            for (let i = 0; i < bookCards.length; i++) {
                const card = bookCards[i];
                const title = card.querySelector('.book-title').textContent;
                const author = card.querySelector('.book-author').textContent;
                let image = null;
                
                const img = card.querySelector('.book-image img');
                if (img) {
                    image = img.src;
                }
                
                books.push({ title, author, image });
            }
            
            return books;
        }

        // Load books from localStorage or use sample data
        function loadBooks() {
            let books = sampleBooks;
            const savedBooks = localStorage.getItem('myBookList');
            
            if (savedBooks) {
                books = JSON.parse(savedBooks);
            }
            
            // Clear existing books
            document.getElementById('completed-books').innerHTML = '';
            document.getElementById('to-read-books').innerHTML = '';
            document.getElementById('dropped-books').innerHTML = '';
            
            // Add books to their containers
            books.completed.forEach(book => {
                createBookCard(book.title, book.author, 'completed', book.image);
            });
            
            books.toRead.forEach(book => {
                createBookCard(book.title, book.author, 'to-read', book.image);
            });
            
            books.dropped.forEach(book => {
                createBookCard(book.title, book.author, 'dropped', book.image);
            });
        }
    </script>
</body>
</html>
