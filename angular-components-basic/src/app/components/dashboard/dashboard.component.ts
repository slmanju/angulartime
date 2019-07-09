import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  books: Book[];

  constructor() { }

  ngOnInit() {
    this.initBooks();
  }

  initBooks() {
    this.books = [
      new Book("Angular in Action", "Jeremy Wilken"),
      new Book("Java 8 in Action", "Alan Mycroft and Mario Fusco"),
      new Book("Clean Code", "Robert Cecil Martin"),
      new Book("Effective Java", "Joshua Bloch"),
      new Book("Spring in Action", "Craig Walls"),
    ];
  }

}
