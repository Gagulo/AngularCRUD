import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../shared/customer.service';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  customerList = [];
  showDeleteMess: boolean;

  ngOnInit() {
    this.customerService.getCustomers().subscribe(
      list => {
        this.customerList = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          }
        })
      }
    );
  }

  onDelete($key) {
    if (confirm('Delete the record?')) {
      this.customerService.deleteCustomer($key);
      this.showDeleteMess = true;
      setTimeout(() => this.showDeleteMess = false, 3000);
    }
  }

}
