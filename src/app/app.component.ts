import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatHorizontalStepper } from '@angular/material';
import { Stack } from './models/stack';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Job } from './models/job';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {



  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 780) {
       let element = document.getElementById('navbar');
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('navbar');
        element.classList.remove('sticky'); 
     }
  }

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

  scroll(elmentId: string) {
     const element = document.querySelector(elmentId)
    if (element) element.scrollIntoView({ behavior: 'smooth'})
}


}
