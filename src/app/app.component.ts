import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
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
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('jobs', {static : false}) jobsElement: ElementRef;
  @ViewChild('projects', {static : false}) projectsElement: ElementRef;
  @ViewChild('skills', {static : false}) skillsElement: ElementRef;
  @ViewChild('about', {static : false}) aboutElement: ElementRef;

  public currentActive = "main";
  public jobsOffset: Number = null;
  public projectsOffset: Number = null;
  public skillsOffset: Number = null;
  public aboutOffset: Number = null;

  isLinear = false;

  constructor() {}

  ngOnInit() {
  }


  ngAfterViewInit() {
    this.jobsOffset = this.jobsElement.nativeElement.offsetTop -240;
    this.projectsOffset = this.projectsElement.nativeElement.offsetTop - 240;
    this.skillsOffset = this.skillsElement.nativeElement.offsetTop - 240;
    this.aboutOffset = this.aboutElement.nativeElement.offsetTop -240;
  }

  scrollToElement() {
    // scrollToElement Code :)
  }

 // @HostListener('window:scroll', ['$event'])
  checkOffsetTop() {
    if (window.pageYOffset >= this.jobsOffset && window.pageYOffset < this.projectsOffset) {
      this.currentActive = "jobs";
      console.log("jobsOffset")

    } else if (window.pageYOffset >= this.projectsOffset  && window.pageYOffset  < this.skillsOffset) {
      this.currentActive = "projects";
      console.log("project")
    } else if (window.pageYOffset >= this.skillsOffset && window.pageYOffset < this.aboutOffset) {
      this.currentActive = "skills";
      console.log("skillsOffset")

    } else if (window.pageYOffset >= this.aboutOffset) {
      this.currentActive = "about";
      console.log("aboutOffset")

    } else {
      this.currentActive = "main";
      console.log("22222222222")
    }
  }
  

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 780) {
       let element = document.getElementById('navbar');
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('navbar');
        element.classList.remove('sticky'); 
     }

    this.checkOffsetTop();

  }


   scroll(elmentId: string) {
     const element = document.querySelector(elmentId)
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' } )
}


}
