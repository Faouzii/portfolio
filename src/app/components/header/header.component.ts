import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //Data to send to parent
  @Output() public sidenavToggle = new EventEmitter();
  @Output() scrollToSection = new EventEmitter();
  
  //data received by the parent
  @Input() currentActiveTab : string;

  @Input() parentNavbarState : Subject<any>;

  pageScrollOffset = 60;

  constructor() { }

  ngOnInit() {
    console.log(this.parentNavbarState)
    this.parentNavbarState.subscribe(state => {
      console.log(state);
      if(state === 'hidden'){
        this.pageScrollOffset = 127;
      }else{
        this.pageScrollOffset = 63;
      }
    });
  }


  ngOnDestroy() {
    // needed if child gets re-created (eg on some model changes)
    // note that subsequent subscriptions on the same subject will fail
    // so the parent has to re-create parentSubject on changes
    this.parentNavbarState.unsubscribe();
  }

  public openSideNav = () => {
    this.sidenavToggle.emit();
  }

  sendDataToParent(data) {
    this.scrollToSection.emit(data);
  }
 

}
