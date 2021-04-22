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
      logo : "https://sass-lang.com/assets/img/illustrations/mouse-3f5cd091.svg",
      title : "MotivyMe Self motivation..",
      description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quos explicab olestias quisquam quis illo ullam similique. Ipsum eos culpa eveniet harum cum, eum aperiam tempore quos, doloremque voluptatum quisquam!",
      googlePlayUrl : "https",
      stacks : [
        {name : "ionic 5"}
      ]
    },

    {
      reveresed : true,
      logo : "https://www.google.com/logos/doodles/2021/earth-day-2021-6753651837108909.2-s.png",
      title : "Ana w coloc..",
      description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quos explicabo",
      googlePlayUrl : "https",
      stacks : [
        {name : "ionic 5"}
      ]
    }
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
