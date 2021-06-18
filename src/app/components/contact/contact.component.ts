import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { NotificationService } from 'src/app/api-services/notification.service';
import { Email } from 'src/app/models/email';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  email = {} as Email;
  contactForm: FormGroup;


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
    public notificationService: NotificationService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      email: this.emailFormControl,
      fullname: this.fullnameFormControl,
      subject: this.subjectFormControl,
      body: this.bodyFormControl
    })
  }


  submitMail(contactForme) {
    console.log(this.email)
    if (!this.contactForm.invalid) {
      this.notificationService.sendEmail(this.email).subscribe((response) => {
        console.log('Valid login attempt - allow submission');
        this.snackBar.open("Message sent succesfully, I'll get back to you ASAP !", "Okay", {
          horizontalPosition: "left",
          verticalPosition: "bottom"
        });
        contactForme.resetForm(contactForme.form.getRawValue)

      },
        err => {
          //alert("Error occured while sending the email")
        })
    } else {
      // Form input is not valid
      this.contactForm.markAllAsTouched(); // Trigger validation across form
      console.log('Invalid login attempt - block submission');
    }


  }

}
