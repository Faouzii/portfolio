import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatHorizontalStepper } from '@angular/material';
import { Stack } from './models/stack';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{



  title = 'portfolio';

  isLinear = false;


  constructor() {}

  ngOnInit() {
    


  }

  vegetables: Stack[] = [
    {name: 'JAVA 8'},
    {name: 'Angular 8'},
    {name: 'Javascript'},
    {name: 'SCSS'},
    {name: 'Angular Material'},
    {name: 'PrimeNg'},
  ];

  drop(event: CdkDragDrop<Stack[]>) {
    moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  }


}
