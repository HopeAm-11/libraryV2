let parent = document.querySelector(".wrapper")
let main = document.querySelector("#main_wrapper");
let form = document.querySelector("#user_form")
let button = document.querySelector("#add_btn");
let sub_btn = document.querySelector("#submit")
let author = document.querySelector("#author")
let title = document.querySelector("#title")
let page = document.querySelector("#pagenum")
let myLibrary = []; // stores book objects.

function Book(author, title, page) {
    this.author = author;
    this.title = title;
    this.page = page;

    // the constructor... builds objects 
}

// let book1 = new Book('harry', 'jk')

function addBookArray(author, title, page) {
    let book = new Book(author, title, page);
    myLibrary.push(book);
}
// addBookArray("harry", "jk")
// addBookArray("wow", "it works")

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
})
// form.classList.remove("book_wrapper")

function toggleForm() {
    if (form.style.display == "none") {
        form.style.display = "block";
        parent.classList.add("dark")
    } else {
        form.style.display = "none";
        parent.classList.remove("dark")

    }
}
form.style.display = "none"
parent.classList.remove("dark")


// addBookArray(input1.value, "jk")

sub_btn.addEventListener('click', test)


function test(event) {
    addBookArray(author.value, title.value, pagenum.value)
    addBookToLibrary()
    event.preventDefault();
    toggleForm()

}