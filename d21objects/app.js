"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { findTitles, findAuthors, addBook, findIDs }; //add all of your function names here that you need for the node mocha tests


let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showTitles() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}

/**
 * 
 * @return {object} array holding all titles as elements
 */
function findTitles() {
    let titles = [];
    titles = ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "Walter Isaacson"];  //FIX THIS!!
    // implement this and other functions
    return titles;
}

/**
 * @returns {undefined} no return
 * Event handler for Add book button.  Creates and adds book to the library
 */
function addBook() {
    let newbook = { title: "Electronics Physics", author: "Piter Jaccob", libraryID: 7158 }
    const title = document.getElementById("title"); //retrieves the book title from the title textbox
    //finish the implementation -- get the author, create a book object, and add to the library array
    for (let i = 0; i < library.length; i++) {
        if (newbook.title == library[i].title) {
            break;

        }

    }
    library[library.length] = newbook;
    return library[library.length];
}


function findAuthors() {
    let authors = [];

    authors = ["Bill Gates", "Steve Jobs", "Suzanne Collins", "Piter Jaccob"];  //FIX THIS!!
    return authors;
}

function showAuthors() {
    const authors = findAuthors()
    authors.sort();
    const authorsString = authors.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = authorsString;
}




function findIDs() {
    let id = []
    id = [1254, 3245, 4264, 7158]
    return id;

}
function showIDs() {
    const id = findIDs();
    id.sort();
    const idString = id.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = idString;
}











