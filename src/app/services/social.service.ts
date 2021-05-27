import { Injectable } from '@angular/core';
import { Social } from '../models/social';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor() { }


  
  socialContacts : Social[] = [
    {
      url : "",
      footerIconUrl : "assets/icons/github-white.png",
      hoverText : "Github",
    },
    {
      url : "https://stackoverflow.com",
      footerIconUrl : "assets/icons/stackoverflow-white.png",
      hoverText : "StackOverflow",
    },
    
    {
      url : "",
      footerIconUrl : "assets/icons/linkedin-white.png",
      hoverText : "LinkedIn",
    },
    {
      url : "",
      footerIconUrl : "assets/icons/npm-white.png",
      hoverText : "NPM",
    },
   
  ]
}
