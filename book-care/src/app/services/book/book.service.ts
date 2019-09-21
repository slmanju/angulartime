import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books = [
    {
      id: "1",
      title: "Effective Java",
      author: "Josh Bloch",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem reprehenderit."
    },
    {
      id: "2",
      title: "Angular After Dark",
      author: "Ramesh & Lasantha",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem reprehenderit."
    }
  ];;

  constructor() { }

  save(book) {
    book.id = new Date().getTime();
    this.books.push(book);
  }

  getBooks() {
    return this.books;
  }

}
