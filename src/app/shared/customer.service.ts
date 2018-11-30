import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private firebase: AngularFireDatabase) { }
  customerList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    mobile: new FormControl('', [Validators.required, Validators.minLength(9)]),
    postalCode: new FormControl(''),
    city: new FormControl(''),
  });

  getCustomers() {
    this.customerList = this.firebase.list('customers');
    return this.customerList.snapshotChanges();
  }

  insertCustomer(customer) {
    this.customerList.push({
      fullName: customer.fullName,
      mobile: customer.mobile,
      postalCode: customer.postalCode,
      city: customer.city
    });
  }

  populateForm(customer) {
    this.form.setValue(customer);
  }

  updateCustomer(customer) {
    this.customerList.update(customer.$key,
      {
        fullName: customer.fullName,
        mobile: customer.mobile,
        postalCode: customer.postalCode,
        city: customer.city
      });
  }

  deleteCustomer($key: string) {
    this.customerList.remove($key);
  }
}
