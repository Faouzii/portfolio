import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  sendDataToParent(data) {
    this.scrollToSection.emit(data);
  }
 

}
