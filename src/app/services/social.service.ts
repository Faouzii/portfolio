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
      footerIconUrl : "https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png",
      hoverText : "Github",
    },
    {
      url : "",
      footerIconUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKZcik21-NDsRuCsHDJumAdEeSFwwCxs1BUXG-JiAaFu-wYqQKpqpCS9dv_tstriikwnc&usqp=CAU",
      hoverText : "NPM",
    },
    {
      url : "",
      footerIconUrl : "https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png",
      hoverText : "LinkedIn",
    },
    {
      url : "https://stackoverflow.com",
      footerIconUrl : "https://cdn4.iconfinder.com/data/icons/miu-flat-social/60/stackoverflow-512.png",
      hoverText : "StackOverflow",
    },
  ]
}
