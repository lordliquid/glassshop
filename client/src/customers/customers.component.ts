import {Component, Input} from '@angular/core';
import {SearchPipe} from '../pipes/search';
import {CustomerSearch} from './customer-search';
import {CustomerList} from './customer-list';
import {CustomerAdd} from './customer-add';

@Component({
    selector: 'customer-main',
    directives: [CustomerSearch, CustomerList, CustomerAdd],
    providers: [SearchPipe],
    template : `
        <h1>Customers</h1>
        <div class="content-grid mdl-grid">
            <div class="mdl-cell">
                <customer-search (update)="term = $event"></customer-search>        
                <customer-list [(term)]="term"></customer-list>
            </div>
            <div class="mdl-cell">
                <customer-add (update)="term = $event"></customer-add>
            </div>
        </div>
    ` 
})
export class CustomersComponent {    
    @Input() term: string;
}