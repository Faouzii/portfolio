import { Injectable } from '@angular/core';
import { Social } from '../models/social';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor() { }


  
  socialContacts : Social[] = [
    {
      url : "https://github.com/Faouzii/",
      footerIconUrl : "assets/icons/github-white.png",
      hoverText : "Github",
    },
    {
      url : "https://stackoverflow.com",
      footerIconUrl : "assets/icons/stackoverflow-white.png",
      hoverText : "StackOverflow",
    },
    
    {
      url : "https://linkedin.com/in/faouzi-mouad",
      footerIconUrl : "assets/icons/linkedin-white.png",
      hoverText : "LinkedIn",
    },
    {
      url : "https://www.npmjs.com/~faouzii",
      footerIconUrl : "assets/icons/npm-white.png",
      hoverText : "NPM",
    },
   
  ]
}
