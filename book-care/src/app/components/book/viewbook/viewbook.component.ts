import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.scss']
})
export class ViewbookComponent implements OnInit {

  book = {};

  constructor(private dialogRef: MatDialogRef<ViewbookComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
    this.book = data;
  }

  ngOnInit() {
  }

}
