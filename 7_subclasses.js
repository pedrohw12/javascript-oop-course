class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

// Magazine Subclass
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

// To call the parent constructor, you need to use super(). In this case,
// the Magazine subclass is extending the Book class and calling its
// constructor

// Instantiate Magazine
const mag1 = new Magazine("Mag One", "John Doe", "2018", "Jan");

console.log(mag1);
