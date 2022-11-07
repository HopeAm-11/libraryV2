# About:

1. A library app where users can add books.
2. user can do the following:
    2.1 add new books with the following info (author, title, number of pages, whether it’s been read)
    2.2 Edit (the status of the book e.g: read/reading etc)
    2.3 remove the book from library 


# Planing:

1. All of your book objects are going to be stored in a simple array.

2. add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array.
    2.1 how to get user input aka how to create book object from user input.
    2.2 how to create a function that store objects into empty array?

3. Write a function that loops through the array and displays each book on the page.
    - You can display them in some sort of table, or each on their own “card”.
    -  It might help for now to manually add a few books to your array so you can see the display.

4. Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want. 

    - You will most likely encounter an issue where submitting your form will not do what you expect it to do. That’s because the submit input tries to send the data to a server by default. If you’ve done the bonus section for the calculator assignment, you might be familiar with event.preventDefault();.

5. add a button on each book’s display to remove the book from the library.

    - You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.

6. Add a button on each book’s display to change its read status.

    - To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

