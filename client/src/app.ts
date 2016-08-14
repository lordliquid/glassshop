import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, Router} from '@angular/router';
import {Items} from './items/items.component';
import {Customer} from './customers/customer.model';
import {CustomersComponent} from './customers/customers.component';
import {Colorer} from './color';
import {Widgets} from './widgets/widget.component';
import {Calculator} from './calculator/calculator.component';

@Component({
  selector: 'my-app',
  template: require('./app.html'),
  providers: [Customer],
  directives: [ROUTER_DIRECTIVES, CustomersComponent, Colorer, Widgets, Calculator]
})
@Routes([
  { path: '/items', component: Items },
  { path: '/widgets', component: Widgets },
  { path: '/calculator', component: Calculator },
  { path: '/customers', component: CustomersComponent }
])
export class App {
  constructor(
    private router: Router
  ) { }
  
  links = {
    items: ['/items'],
    widgets: ['/widgets'],
    calculator: ['/calculator'],
    customers: ['/customers']
  }

  goTo(location: any) {
    this.router.navigate(location);
  }
}
