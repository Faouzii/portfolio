import { Component, OnInit } from '@angular/core';
import { slideFadeAnimation } from 'src/app/animations/slideFade';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [slideFadeAnimation]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
