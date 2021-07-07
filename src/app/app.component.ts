import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatHorizontalStepper } from '@angular/material';
import { Stack } from './models/stack';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Job } from './models/job';
import { slideFadeAnimation } from './animations/slideFade';
import { Subject } from 'rxjs';
import { NotificationService } from './api-services/notification.service';


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
  @ViewChild('contact', {static : false}) contactElement: ElementRef;

  public currentActive = "main";
  public jobsOffset: number = null;
  public projectsOffset: number = null;
  public skillsOffset: number = null;
  public aboutOffset: number = null;
  public contactOffset: number = null;

  pageScrollOffset = 127;

  navbarState:Subject<any> = new Subject();

  
  
  isLinear = false;

  constructor(
    public notificationService : NotificationService
  ) {}

  ngOnInit() {
    this.notificationService.newVisitorNotification();
  }


  ngAfterViewInit() {
    this.aboutOffset = this.aboutElement.nativeElement.offsetTop ;

    this.jobsOffset = this.jobsElement.nativeElement.offsetTop - 120;
    this.projectsOffset = this.projectsElement.nativeElement.offsetTop  - 650;
    this.skillsOffset = this.skillsElement.nativeElement.offsetTop + 220;
    this.contactOffset = this.contactElement.nativeElement.offsetTop -100;
  }

  scrollToElement() {
    // scrollToElement Code :)
  }

 // @HostListener('window:scroll', ['$event'])
  checkOffsetTop() {
    if (window.pageYOffset >= this.jobsOffset && window.pageYOffset < (this.projectsOffset  )) {
      console.log("job")
      this.currentActive = "jobs";

    } else if (window.pageYOffset >= this.projectsOffset  && window.pageYOffset  < this.skillsOffset) {
      
      this.currentActive = "projects";

    } else if (window.pageYOffset >= this.skillsOffset && window.pageYOffset < this.contactOffset) {
      this.currentActive = "skills";

    } else if (window.pageYOffset >= this.contactOffset ) {
      this.currentActive = "contact";

    } else if (window.pageYOffset >= this.aboutOffset && window.pageYOffset < this.jobsOffset ) {
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
       this.pageScrollOffset = 50;
      } else {
      navbar.classList.remove('sticky'); 
      scrollUpbtn.classList.remove('hide-scroll-up'); 
      this.navbarState.next("hidden");
      this.pageScrollOffset = 120;
     
     }

    this.checkOffsetTop();
    
  }


//    scroll(elmentId: string) {
//      const element = document.querySelector(elmentId)
//     if (element) element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' } )
// }


}
