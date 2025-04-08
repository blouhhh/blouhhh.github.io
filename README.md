<!DOCTYPE html>
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
        // Book data - Edit this section to add, modify or remove books
        const myBooks = {
            completed: [
                { title: "To Kill a Mockingbird", author: "Harper Lee", imageUrl: null },
                { title: "1984", author: "George Orwell", imageUrl: null },
                { title: "The Catcher in the Rye", author: "J.D. Salinger", imageUrl: null }
            ],
            toRead: [
                { title: "The Great Gatsby", author: "F. Scott Fitzgerald", imageUrl: null },
                { title: "Brave New World", author: "Aldous Huxley", imageUrl: null },
                { title: "The Hobbit", author: "J.R.R. Tolkien", imageUrl: null }
            ],
            dropped: [
                { title: "Ulysses", author: "James Joyce", imageUrl: null },
                { title: "War and Peace", author: "Leo Tolstoy", imageUrl: null }
            ]
        };

        // Initialize when the page loads
        window.onload = function() {
            // Display books in their respective tabs
            displayBooks();
            
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

        // Display books from the data object
        function displayBooks() {
            // Display completed books
            const completedContainer = document.getElementById('completed-books');
            myBooks.completed.forEach(book => {
                const bookCard = createBookCard(book.title, book.author, book.imageUrl);
                completedContainer.appendChild(bookCard);
            });
            
            // Display to-read books
            const toReadContainer = document.getElementById('to-read-books');
            myBooks.toRead.forEach(book => {
                const bookCard = createBookCard(book.title, book.author, book.imageUrl);
                toReadContainer.appendChild(bookCard);
            });
            
            // Display dropped books
            const droppedContainer = document.getElementById('dropped-books');
            myBooks.dropped.forEach(book => {
                const bookCard = createBookCard(book.title, book.author, book.imageUrl);
                droppedContainer.appendChild(bookCard);
            });
        }

        // Create a book card element
        function createBookCard(title, author, imageUrl) {
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
            
            bookInfo.appendChild(bookTitle);
            bookInfo.appendChild(bookAuthor);
            
            const bookImage = document.createElement('div');
            bookImage.className = 'book-image';
            
            if (imageUrl) {
                const img = document.createElement('img');
                img.src = imageUrl;
                img.style.maxWidth = '100%';
                img.style.maxHeight = '100%';
                bookImage.appendChild(img);
            } else {
                bookImage.textContent = 'Image';
            }
            
            bookCard.appendChild(bookInfo);
            bookCard.appendChild(bookImage);
            
            return bookCard;
        }
    </script>
</body>
</html>
