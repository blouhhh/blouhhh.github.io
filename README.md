<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Collection - Windows XP Style</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Tahoma', 'Segoe UI', sans-serif;
        }
        
        body {
            background-image: url('18208.jpg');
            background-color: #236B8E; /* WinXP blue background */
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
        
        /* Tabs styling - Windows XP style */
        .tabs {
            display: flex;
            background-color: #ECE9D8; /* WinXP default window color */
            overflow: hidden;
            margin-bottom: 20px;
            border: 1px solid #0054E3;
            border-radius: 3px 3px 0 0;
        }
        
        .tab-button {
            background: linear-gradient(to bottom, #EBF4FA 0%, #D5E8F8 45%, #D5E8F8 55%, #CEE5F6 100%);
            border: none;
            outline: none;
            cursor: pointer;
            padding: 10px 20px;
            flex: 1;
            font-size: 12px;
            font-weight: bold;
            color: #0046D5;
            transition: all 0.3s ease;
            border-right: 1px solid #B5CAE7;
            border-bottom: 1px solid #B5CAE7;
        }
        
        .tab-button.active {
            background: linear-gradient(to bottom, #FEFEFE 0%, #ECF6FD 45%, #D0E8FB 55%, #D0E8FB 100%);
            color: #000000;
            border-bottom: none;
        }
        
        .tab-button:hover:not(.active) {
            background: linear-gradient(to bottom, #FEFEFE 0%, #ECF6FD 45%, #D0E8FB 55%, #D0E8FB 100%);
            color: #0054E3;
        }
        
        /* Tab content */
        .tab-content {
            display: none;
            background-color: #FFFFFF;
            min-height: calc(100vh - 140px);
            padding: 20px;
            border: 1px solid #7A98AF;
            border-top: none;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
        }
        
        .tab-content.active {
            display: block;
        }
        
        /* Book cards - Windows XP style */
        .books-container {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
        }
        
        .book-card {
            background-color: #ECE9D8;
            width: 220px;
            padding: 12px;
            border-radius: 3px;
            display: flex;
            color: #000000;
            border: 1px solid #ACA899;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
        }
        
        .book-info {
            flex: 1;
        }
        
        .book-title {
            font-weight: bold;
            font-size: 14px;
            margin-bottom: 5px;
            color: #0046D5;
        }
        
        .book-author {
            color: #333333;
            font-size: 12px;
        }
        
        .book-image {
            width: 80px;
            height: 100px;
            background-color: #FFFFFF;
            margin-left: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666666;
            border: 1px solid #ACA899;
        }
        
        /* Windows XP-style title bar */
        .window-header {
            background: linear-gradient(to right, #0A246A, #3A6EA5);
            color: white;
            padding: 5px 10px;
            font-weight: bold;
            display: flex;
            align-items: center;
            margin-bottom: 5px;
        }
        
        .window-title {
            flex-grow: 1;
        }
        
        .window-buttons {
            display: flex;
        }
        
        .window-button {
            width: 16px;
            height: 16px;
            margin-left: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 10px;
            color: black;
            background-color: #ECE9D8;
            border: 1px solid #FFFFFF;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Windows XP style title bar -->
        <div class="window-header">
            <div class="window-title">Book Collection</div>
            <div class="window-buttons">
                <div class="window-button">_</div>
                <div class="window-button">□</div>
                <div class="window-button">×</div>
            </div>
        </div>
        
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
                { title: "Do Androids Dream of Electric Sheep?", author: "Philip K. Dick", imageUrl:https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1507838927i/36402034.jpg},
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
