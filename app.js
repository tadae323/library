let myLibrary = []

const closeBtn = document.querySelector("#close")
const modal = document.querySelector("#modal")
const addBtn = document.querySelector("#add-btn")
const saveBtn = document.querySelector("#save")
const titleInput = document.querySelector("#title")
const authorInput = document.querySelector("#author")
const pagesInput = document.querySelector("#pages")
const finishedCheckbox = document.querySelector("#finished")
const libraryFromLocalStorage = JSON.parse(localStorage.getItem("myLibrary"))
const shelf = document.querySelector("#shelf")

if (libraryFromLocalStorage) {
  myLibrary = libraryFromLocalStorage
  render(myLibrary)
}


closeBtn.addEventListener("click", () => {
  modal.style.display = "none"
})

addBtn.addEventListener("click", () => {
  modal.style.display = "flex"
})

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}

saveBtn.addEventListener("click", addBookToLibrary)

class Book {
  constructor(title, author, pages, isFinished) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isFinished = isFinished
  }
}

function clearValues() {
  titleInput.value = ""
  authorInput.value = ""
  pagesInput.value = ""
  finishedCheckbox.checked = false
}

function addBookToLibrary() {
  let title = titleInput.value
  let author = authorInput.value
  let pages = authorInput.value
  let finished = finishedCheckbox.checked ? true : false
  let bookToAdd = new Book(title, author, pages, finished)
  modal.style.display = "none"
  myLibrary.push(bookToAdd)
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary))
  render(myLibrary)
  clearValues()
}

function render(booksArray) {
  let bookList = ""
  console.log(booksArray)
  for (let i = 0; i < booksArray.lenght; i++) {
    bookList += `<div class="books">book${i}</div>`
  }
  shelf.innerHTML = bookList
  // figure out why this isn't working
}
