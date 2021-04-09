import { Component, OnInit } from '@angular/core';
import { Stack } from 'src/app/models/stack';
import { slideUpDownAnimation } from 'src/app/animations/slideUpDownAnimation';


@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations : [slideUpDownAnimation]
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  stacks: Stack[] = [
    {name: 'JAVA 8'},
    {name: 'Angular 8'},
    {name: 'Javascript'},
    {name: 'SCSS'},
    {name: 'Angular Material'},
    {name: 'PrimeNg'},
  ];

  showMotivyMeDetails : boolean = false;

  toggleDisplay(el : HTMLElement){
    this.showMotivyMeDetails = true;
    setTimeout(() => {
      el.scrollIntoView({behavior: 'smooth'});
    },100);
  }

  hide(el : HTMLElement){
    this.showMotivyMeDetails = false;
    setTimeout(() => {
      el.scrollIntoView({behavior: 'smooth'});
    },500);
  }
}
