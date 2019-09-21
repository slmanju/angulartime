import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatSnackBarModule,
  MatToolbarModule,
} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSnackBarModule,
    MatSelectModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSnackBarModule,
    MatSelectModule
  ]    
})

export class MaterialModule {}