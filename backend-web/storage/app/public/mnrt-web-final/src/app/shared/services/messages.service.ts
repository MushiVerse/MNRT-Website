import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private snackBar: MatSnackBar) { }
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  
  //Success snark
  openSnackBar(message: string) {
    this.snackBar.open(message, 'close', {
      duration: 5000,
      panelClass: ['successSnarkBar'],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  //Failure snark
  openFailureSnackBar(message: string) {
    this.snackBar.open(message, 'close', {
      duration: 5000,
      panelClass: ['failureSnarkBar'],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
