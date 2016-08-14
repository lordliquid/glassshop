import {Component, Input} from '@angular/core';
import {SearchPipe} from '../pipes/search';
//import {CustomersComponent} from './customers.component';
import {CustomerService} from './customer.service';
import {CustomerSearch} from './customer-search.ts';

@Component({
    selector: 'customer-list',
    template: `
        <table id="customerList" class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
            <thead>
                <tr>
                    <th class="mdl-data-table__cell--non-numeric">Name</th>
                    <th>Phone</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let customer of customers | search: term">
                    <td class="mdl-data-table__cell--non-numeric">{{customer.name}}</td>
                    <td>{{customer.phone}}</td>
                    <td>{{customer.address}}</td>                               
                </tr>   
            </tbody>
        </table>
    `,
    pipes: [SearchPipe],
    providers: [CustomerService]
})
export class CustomerList{
    @Input() term;
    public customers = [];

    constructor(public customerService:CustomerService) {
        this.customers = customerService.getCustomers();
     } 
}