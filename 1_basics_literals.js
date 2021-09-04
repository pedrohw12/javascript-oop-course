// Object literal
const book1 = {
  title: "Book One",
  author: "John Doe",
  year: "2013",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};
console.log(book1.getSummary());

// Creating books in this way, 
//will be too much work to do every 
//new book we want to create

// To solve this, we are going to work with
// constructors (next file)
