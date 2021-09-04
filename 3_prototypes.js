// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// getSummary
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Instantiate an Object
const book1 = new Book("Book 1", "John Doe", "2013");
console.log(book1.getSummary());
