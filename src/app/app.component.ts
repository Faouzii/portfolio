import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatHorizontalStepper } from '@angular/material';
import { Stack } from './models/stack';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Job } from './models/job';
import { slideFadeAnimation } from './animations/slideFade';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideFadeAnimation]
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

  navbarState:Subject<any> = new Subject();

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

    } else if (window.pageYOffset >= this.projectsOffset  && window.pageYOffset  < this.skillsOffset) {
      this.currentActive = "projects";
    } else if (window.pageYOffset >= this.skillsOffset && window.pageYOffset < this.aboutOffset) {
      this.currentActive = "skills";

    } else if (window.pageYOffset >= this.aboutOffset) {
      this.currentActive = "about";

    } else {
      this.currentActive = "main";
    }
  }
  

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    let scrollUpbtn = document.getElementById('scroll-up-container');
    let navbar = document.getElementById('navbar');

     if (window.pageYOffset > window.innerHeight) {
       navbar.classList.add('sticky');
       scrollUpbtn.classList.add('hide-scroll-up'); 
       this.navbarState.next("showen");
      } else {
      navbar.classList.remove('sticky'); 
      scrollUpbtn.classList.remove('hide-scroll-up'); 
      this.navbarState.next("hidden");

     }

    this.checkOffsetTop();
    
  }


   scroll(elmentId: string) {
     const element = document.querySelector(elmentId)
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' } )
}


}
