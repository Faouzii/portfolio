import { Component, OnInit } from '@angular/core';
import { SocialService } from 'src/app/services/social.service';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  socialContacts;

  constructor(
    private socialService : SocialService
  ) { }

  ngOnInit() {
    this.socialContacts = this.socialService.socialContacts;
    console.log(this.socialContacts)
  }

 
}
