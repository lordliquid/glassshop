import {Component} from '@angular/core';
import {Customer} from './customer.model';

@Component({
    selector: 'customer-main',
    template: require('./customers.component.html'),
    providers: [Customer]
})
export class CustomersComponent {

    customers: Customer[] = [
        { id: 1, name: 'Robert Cutright', phone: '9039780505', address: '23000 CR 187' },
        { id: 2, name: 'David Cutright', phone: '9039540114', address: '15412 Cedar Bay Dr.' }
    ]

}