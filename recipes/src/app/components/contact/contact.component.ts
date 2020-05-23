import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('form') contactForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = [
    'male',
    'female'
  ];
  defaultGender = this.genders[0];

  constructor() { }

  ngOnInit(): void {
  }

  suggestUsername(): void {
    const username = 'superusername';
    const patchedFormValues = Object.assign(this.contactForm.value, {
      userData: {
        username
      }
    });
    this.contactForm.form.patchValue(patchedFormValues);
  }

  resetForm(): void {
    this.contactForm.reset();
  }

  onSubmit(): void {
    console.log('submitting', Object.values(this.contactForm.form.controls).filter(control => control.valid));
    this.resetForm();
  }

}
