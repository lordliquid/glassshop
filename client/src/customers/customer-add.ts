import {Component, EventEmitter, Output} from '@angular/core';
import {CustomerService} from './customer.service.ts';
import {CustomerList} from './customer-list';
import {Customer} from './customer.model';

@Component({
    selector: 'customer-add',
    directives: [CustomerList],
    providers: [CustomerService],
    template: `
            <div class="mdl-card mdl-shadow--2dp">
                <div class="mdl-card__title">
                    <h2 class="mdl-card__title-text">Add Customer</h2>
                </div>
                    <form action="#">
                    <div class="mdl-card__supporting-text">
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input [(ngModel)]="name" class="mdl-textfield__input" type="text" (input)="update.emit(name.value)">
                            <label class="mdl-textfield__label" for="search">Name</label>
                        </div>
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input [(ngModel)]="phone" class="mdl-textfield__input" type="text">
                            <label class="mdl-textfield__label" for="search">Phone</label>
                        </div>
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input [(ngModel)]="address" class="mdl-textfield__input" type="text">
                            <label class="mdl-textfield__label" for="search">Address</label>
                        </div>                        
                    </div>
                    </form>
                
                <div class="mdl-card__actions mdl-card--border">
                    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" (click)="addCustomer()">
                        Add
                    </a>
                </div>
            </div>
    `
})
export class CustomerAdd {
    @Output() update = new EventEmitter();
    customer: Customer;
    customerService: CustomerService;

    // Form
    name: string = '';
    phone: string = '';
    address: string = '';

    addCustomer(){
        this.customer = new Customer();
        this.customer = {
            id: 0,
            name: this.name,
            phone: this.phone,
            address: this.address
        };

        this.customerService.addCustomer(this.customer, false);
    }

    ngOnInit() {
        this.update.emit('');
    }

    constructor(customerService: CustomerService) {
        this.customerService = customerService;
    }
}