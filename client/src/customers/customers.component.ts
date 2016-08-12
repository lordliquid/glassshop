import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Customer} from './customer.model';
import {SearchPipe} from '../pipes/search';

@Component({
    selector: 'customer-main',
    template: require('./customers.component.html'),
    providers: [Customer],
    pipes: [SearchPipe],
    host: {
        '(change)': 'onChange($event)' 
    }
})
export class CustomersComponent {    
    public customers;

    constructor() {
        this.customers = [
            { id: 1, name: 'Robert Cutright', phone: '9039780505', address: '23000 CR 187' },
            { id: 2, name: 'David Cutright', phone: '9039540114', address: '15412 Cedar Bay Dr.' }
        ]
    }

    onChange(event: Event) {
        console.log('event fired');
    }   
}