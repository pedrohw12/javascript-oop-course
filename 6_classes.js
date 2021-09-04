class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

  static topBookStore() {
    return "Barnes & Noble";
  }
}

// Instantiate Object
const book1 = new Book("Book One", "John Doe", "2013");

console.log(book1.getSummary());

// Static Method
// The static method can be called without
// needing of instantiate the class Book
console.log(Book.topBookStore());
