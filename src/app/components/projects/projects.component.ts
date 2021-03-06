import { Component, OnInit } from '@angular/core';
import { Stack } from 'src/app/models/stack';
import { slideUpDownAnimation } from 'src/app/animations/slideUpDownAnimation';
import { Project } from 'src/app/models/project';


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


  projects : Project [] = [
    {
      reveresed : false,
      logo : "assets/img/anawcoloc-logo.png",
      title : "Ana w Coloc : Shared Expenses Management",
      description : "Ana w l'coloc is a 100% Moroccan application, 100% free and without ads, which allows you to manage the expenses shared between roommates, friends, family ... in order to facilitate daily life.",
      url : "https://play.google.com/store/apps/details?id=me.faouzi.mobile.anawcoloc",
      isMobileApp : true,
      stacks : [
        {name : "ionic 5"},
        {name : "Angular 8"},
        {name : "Java 8"},
        {name : "Spring boot"},
        {name : "PostgreSQL"},

      ]
    },

    {
      reveresed : true,
      logo : "assets/img/motivyme-logo.png",
      title : "Do it, Self Motivation app",
      description : "Self motivation app that helps you achieve your goals, by scheduling your day-to-day / weekly tasks, and get rewarded for doing them",
      url : "https://play.google.com/store/apps/details?id=my.awesome.doit.app.by.faouzi",
      isMobileApp : true,
      stacks : [
        {name : "ionic 5"},
        {name : "Angular 8"},
        {name : "Java 8"},
        {name : "Spring boot"},
        {name : "PostgreSQL"},
      ]
    },
    {
      reveresed : false,
      logo : "assets/img/weebma.png",
      title : "Weebma : Shopping website",
      description : "Weebma is a simple e-Commerce website that helps small businesses bring thier products to the digital world .",
      url : "https://www.weebma.com",
      isWebsite : true,
      stacks : [
        {name : "Angular 8"},
        {name : "Java 8"},
        {name : "Spring boot"},
        {name : "MySQL"},

      ]
    },
  ]



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

  drop(event){
    
  }
}
