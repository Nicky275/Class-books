class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

class Library {
  constructor(owner) {
    this.owner = owner;
    this.books = [];
  }

  addBook(book) {
    const bookNr = this.books.length + 1;
    book.title = "title-" + bookNr.toString().padStart(3, "0");
    book.pages = 50 + Math.floor(950 * Math.random());
    book.author = getRandomStr();
    this.books.push(book);
  }

  removeBookByTitle(title) {
    this.books = this.books.filter((book) => book.title !== title);
  }

  totalPages() {
    let total = 0;
    for (const book of this.books) {
      total += book.pages;
    }
    return total;
  }

  totalBooks() {
    return this.books.length;
  }

  averagePagesPerBook() {
    if (this.books.length === 0) {
      return 0;
    }
    return Math.round(this.totalPages() / this.totalBooks());
  }
}

function getRandomStr() {
  return Math.random().toString(36).substring(2);
}

const bookData = [
  { title: "title-1", author: "szh7i6vh3fp", pages: 836 },
  { title: "title-2", author: "7yl4xwhk35j", pages: 170 },
  { title: "title-4", author: "romaywrg3w", pages: 756 },
  { title: "title-5", author: "wfa463vcheb", pages: 439 },
  { title: "title-6", author: "nz5ycbi7ifb", pages: 954 },
  { title: "title-7", author: "v6m7v5fx9k", pages: 417 },
  { title: "title-8", author: "ibdz3dynf8j", pages: 748 },
  { title: "title-9", author: "wzcicfyefaq", pages: 618 },
  { title: "title-10", author: "5t4h5j96vda", pages: 655 },
];

const myLibrary = new Library("Your Name");

for (const data of bookData) {
  const book = new Book(data.title, data.author, data.pages);
  myLibrary.addBook(book);
}

console.log("Total pages in library: " + myLibrary.totalPages());
console.log("Total books in library: " + myLibrary.totalBooks());
console.log("Average pages per book: " + myLibrary.averagePagesPerBook());

const newBook = new Book("My New Book", "John Doe", 300);
myLibrary.addBook(newBook);

console.log (myLibrary);
