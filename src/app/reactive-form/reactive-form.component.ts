
import { Component,  EventEmitter,  OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { lengthValidator } from './validators/lengthValid';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
 


  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, [Validators.required, lengthValidator]),
      email: new FormArray([new FormControl(null, Validators.required)]),
      rate: new FormControl(null, Validators.required),
      review: new FormControl(null, [
        Validators.minLength(5),
        Validators.required,
      ]),
    });
  }
  myRate: number = 0;
  myDate : Date = new Date;


  ngOnInit(): void {
    console.log(this.FirstName);
    console.log(this.email['controls']);
    
  }
  getchildsdt(DT: number) {
    this.myRate = DT;
  }
  onSubmit() {
    console.log(this.LastName);
    console.log(this.myForm);

    if (this.myForm.valid) {
      console.log('Invalid');
      this.myForm.reset();
    } else {
      console.log('Invalid');
    }
  }

  setDefVal() {
    this.myForm.setValue({
      firstName: 'Salome',
      lastName: 'Ghaghanidze',
      email: ['Test@bog.ge'],
      rate: 'nt',
      review: 'Good Vibes Only ',
    });
  }

  chanageVal() {
    this.myForm.patchValue({
      firstName: 'Nick',
      lastName: 'Johnson',
      rate: 'dst',
      review: 'Not  Good ',
    });
  }

  addContact()
  {

     this.email.push(new FormControl (null , Validators.required))
  }

  get FirstName() {
    return this.myForm.get('firstName') as FormControl;
  }
  get LastName() {
    return this.myForm.get('lastName') as FormControl;
  }

  get rate() {
    return this.myForm.get('rate') as FormControl;
  }
  get review() {
    return this.myForm.get('review') as FormControl;
  }

  get email() {
    return this.myForm.get('email') as FormArray;
  }
}
