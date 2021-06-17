import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { NotificationService } from 'src/app/api-services/notification.service';
import { Email } from 'src/app/models/email';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  email = {} as Email;
  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  fullnameFormControl = new FormControl('', [
    Validators.required,
  ]);

  bodyFormControl = new FormControl('', [
    Validators.required,
  ]);

  subjectFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(    
    public notificationService : NotificationService
    ) { }

  ngOnInit( ) {
  }

  
  submitMail(){
    this.notificationService.sendEmail(this.email).subscribe((response)=>{
     // alert("Message sent successfully")
    },
    err=>{
      //alert("Error occured while sending the email")
    })
  }

}
