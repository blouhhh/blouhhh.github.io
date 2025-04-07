<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Book List</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>My Book List</h1>
    <form id="book-form">
        <input type="text" id="title" placeholder="Book Title" required>
        <input type="text" id="author" placeholder="Author" required>
        <button type="submit">Add Book</button>
    </form>
    <ul id="book-list"></ul>

    <script src="script.js"></script>
</body>
</html>
