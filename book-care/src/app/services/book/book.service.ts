import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books = [];

  constructor() { 
    let savedBooks = JSON.parse(localStorage.getItem("books"));
    // if (!savedBooks) {
      savedBooks = this.initBooks();
      localStorage.setItem("books", JSON.stringify(savedBooks));
    // }
    console.log(savedBooks);
    this.books = savedBooks;
  }

  save(book) {
    book.id = new Date().getTime();
    book.image = "/assets/angular.png";
    this.books.push(book);
    localStorage.setItem("books", JSON.stringify(this.books));
  }

  getBooks() {
    return this.books;
  }

  initBooks() {
    return [
      {
        id: "1",
        title: "Effective Java",
        author: "Josh Bloch",
        image: "/assets/effective-java.jpg",
        price: 35,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem reprehenderit."
      },
      {
        id: "2",
        title: "Angular After Dark",
        author: "Ramesh",
        image: "/assets/angular.png",
        price: 25,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem reprehenderit."
      },
      {
        id: "3",
        title: "Typescript After Dark",
        author: "Lasantha",
        image: "/assets/angular.png",
        price: 25,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem reprehenderit."
      },
      {
        id: "4",
        title: "Clean Code",
        author: "Robert C. Martin",
        image: "/assets/clean-code.jpg",
        price: 30,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem reprehenderit."
      },
      {
        id: "5",
        title: "You Don't Know JS: Up & Going",
        author: "Kyle Simpson",
        image: "/assets/ydkjs.jpg",
        price: 20,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem reprehenderit."
      },
      {
        id: "6",
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        image: "/assets/js-good-parts.jpg",
        price: 20,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem reprehenderit."
      },
      {
        id: "7",
        title: "Head First Design Patterns",
        author: "Eric Freeman",
        image: "/assets/hf-desing-patterns.jpg",
        price: 25,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem reprehenderit."
      }
    ];
  }

}
