let myLibrary = []

const closeBtn = document.querySelector("#close")
const modal = document.querySelector("#modal")
const addBtn = document.querySelector("#add-btn")
const saveBtn = document.querySelector("#save")
const titleInput = document.querySelector("#title")
const authorInput = document.querySelector("#author")
const pagesInput = document.querySelector("#pages")
const finishedCheckbox = document.querySelector("#finished")

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
})

addBtn.addEventListener("click", () => {
  modal.style.display = "flex"
})

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

saveBtn.addEventListener("click", addBookToLibrary)

function Book(title, author, pages, isRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.isRead = isRead
  this.info = function() {
    console.log(`${this.title} by ${this.author}, ${pages} pages, ${this.isRead ? "already read" : "not read yet"}`)
  }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)
theHobbit.info()

function addBookToLibrary() {
  // create new Book object 
  // name?
}
