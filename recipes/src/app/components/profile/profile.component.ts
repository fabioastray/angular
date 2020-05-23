import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  genders = ['Female', 'Male'];
  profileForm: FormGroup;
  forbiddenUsernames = ['fcampos'];

  constructor() { }

  get controls() {
    return (this.profileForm.get('hobbies') as FormArray).controls;
  }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(
          null,
          [
            Validators.required,
            this.forbiddenUsernamesValidator.bind(this)
          ]
        ),
        email: new FormControl(
          null,
          {
            validators: [
              Validators.required,
              Validators.email
            ],
            asyncValidators: this.forbiddenEmailAddressValidator,
            updateOn: 'blur'
          }
        )
      }),
      gender: new FormControl(),
      hobbies: new FormArray([])
    });

    this.profileForm.statusChanges.subscribe((status) => console.log(status));

    this.initializeForm();
  }

  initializeForm() {
    this.profileForm.setValue({
      userData: {
        username: null,
        email: null
      },
      gender: this.genders[0],
      hobbies: []
    });
  }

  onSubmit() {
    console.log(this.profileForm);
    this.initializeForm();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (this.profileForm.get('hobbies') as FormArray).push(control);
  }

  forbiddenUsernamesValidator(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {
        forbiddenUsername: true
      };
    }
  }

  forbiddenEmailAddressValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      const forbiddenEmails = ['rockastray@gmail.com'];
      setTimeout(() => {
        if (forbiddenEmails.indexOf(control.value) !== -1) {
          resolve({
            forbiddenEmailAddress: true
          });
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }
}
