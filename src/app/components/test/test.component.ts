import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  correctName = "khitam";
  counter = 22;

  name : string;

  submit(){
    if(this.name === this.correctName){
      this.openSnackBar("Yo yoy yo ela slamtek " , "Oki");
      alert("mzian mzian")

    }else{
      this.counter++;
      this.openSnackBar(this.name + " is wrong, you have " + (100 - this.counter) + " attemps left : "  , "Oki");
      this.name = "";
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
