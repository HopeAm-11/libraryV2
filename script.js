let main = document.querySelector("#main_wrapper");
let form = document.querySelector("#user_form")
let button = document.querySelector("#add_btn");
let input1 = document.querySelector("#test")
let myLibrary = []; // stores book objects.

function Book(author, title) {
    this.title = title
    this.author = author
    // the constructor... builds objects 
}

let book1 = new Book('harry', 'jk')

function addBookArray(a, b) {
    let book = new Book(a, b)
    myLibrary.push(book)
}
addBookArray("harry", "jk")
addBookArray("wow", "it works")

function addBookToLibrary() {
    myLibrary.forEach(books => {
        for (let key in books) {
            console.log(`${key}: ${books[key]}`)
        }
    });
    // do stuff here loop through objects array and display them on main page

    // The outer forEach() loop is used to iterate through the objects array.
    //  We then use the for...in loop to iterate through the properties of an individual object.
}

button.addEventListener("click", () => {
    // form.classList.toggle("book_wrapper");
    toggleForm()

    addBookArray(input1.value, "jk")
})
// form.classList.remove("book_wrapper")

function toggleForm() {
    if (form.style.display == "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}
form.style.display = "none"