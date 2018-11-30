import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  submitted: boolean;
  showSucessMess: boolean;
  formControls = this.customerService.form.controls;

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.customerService.form.valid){
      if (this.customerService.form.get('$key').value == null)
        this.customerService.insertCustomer(this.customerService.form.value);
        this.showSucessMess = true;
        setTimeout(() => this.showSucessMess = false, 3000);
      this.submitted = false;
    }
  }

}
