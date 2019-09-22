import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';
import { MatDialogConfig, MatDialog, MatSnackBar } from '@angular/material';
import { ViewbookComponent } from '../viewbook/viewbook.component';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.scss']
})
export class ViewBooksComponent implements OnInit {

  books;

  constructor(private bookService: BookService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

  openDialog(book) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = book;

    this.dialog.open(ViewbookComponent, dialogConfig);
  }

  deleteBook(book) {
    this.bookService.deleteBook(book);
    this.books = this.bookService.getBooks();

    this.openSnackBar();
  }

  openSnackBar() {
    this.snackBar.open('Book deleted', 'Ok', {
      duration: 1000,
    });
  }

}
