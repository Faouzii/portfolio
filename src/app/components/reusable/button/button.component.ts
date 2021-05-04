import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'media-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @ViewChild('github', {static : false}) githubBtn : HTMLElement;



  constructor( private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.githubBtn, "width", "500px");

  }

}
