import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
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

  constructor() { }

  ngOnInit() {
   
  }

  submitMail(){
    
  }

}
