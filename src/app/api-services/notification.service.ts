import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Email } from '../models/email';
import { Ipdata } from '../models/ipdata';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  backendAPI;

  constructor(
    private httpClient: HttpClient
  ) {
    this.backendAPI = environment.backendAPIAddress;
  }
  public newVisitorNotification() {
    return this.httpClient.get('https://jsonip.com/').subscribe((data : Ipdata)=> {
      console.log(data.ip)
       this.httpClient.get(this.backendAPI + 'new-visite/'+ data.ip).subscribe((resp)=>{})

    });
  }

  public sendEmail(email: Email) {
    return this.httpClient.post(this.backendAPI + 'mails', email);
  }
}

