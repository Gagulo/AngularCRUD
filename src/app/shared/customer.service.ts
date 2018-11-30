import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }
  form = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    mobile: new FormControl('', [Validators.required, Validators.minLength(6)]),
    postalCode: new FormControl(''),
    city: new FormControl(''),
  });
}
