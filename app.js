let myLibrary = []

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
  
}
