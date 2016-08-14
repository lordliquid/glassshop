import {Injectable} from '@angular/core';
import {Customer} from './customer.model';

@Injectable()
export class CustomerService {
    customers: Customer[] = [];
    
    constructor(){
        this.customers = [
            { id: 1, name: 'Robert Cutright', phone: '9039780505', address: '23000 CR 187' },
            { id: 2, name: 'David Cutright', phone: '9039540114', address: '15412 Cedar Bay Dr.' }
        ];
    }

    public getCustomers(){
        return this.customers;
    }

    public addCustomer(customer: Customer, returnCustomer: boolean){
        customer.id = this.customers.length + 1;
        this.customers.push(customer);
        this.getCustomers();
        
        console.log(customer);
        if(returnCustomer){
            return customer;
        }
    }
}