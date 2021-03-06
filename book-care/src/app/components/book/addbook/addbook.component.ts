import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/app/services/book/book.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss']
})
export class AddbookComponent implements OnInit {

  bookForm : FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private bookService: BookService,
              private snackBar: MatSnackBar) {
    this.bookForm = formBuilder.group({
      title : ['', [ Validators.required ]],
      author : ['', [ Validators.required ]],
      price: 1,
      description : ['', [ Validators.required, Validators.minLength(5), Validators.maxLength(50) ]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.bookService.save(this.bookForm.value);

    this.openSnackBar();
  }

  get title() {
    return this.bookForm.get("title");
  }

  get author() {
    return this.bookForm.get("author");
  }

  get description() {
    return this.bookForm.get("description");
  }

  openSnackBar() {
    this.snackBar.open('Book saved', 'Ok', {
      duration: 1000,
    });
  }

}
