import { Component, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'media-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() btnType : string;
  @Input() iconName : string;
  @Input() title : string;
  @Input() btnUrl : string;


  constructor( private renderer: Renderer2) { }
 
  ngOnInit() {

  }

}
