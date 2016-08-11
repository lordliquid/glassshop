import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, Router} from '@angular/router';
import {Items} from './items/items.component';
import {Customer} from './customers/customer.model';
import {CustomerComponent} from './customers/customer.component';
import {Colorer} from './color';
import {Widgets} from './widgets/widget.component';
import {Calculator} from './calculator/calculator.component';

@Component({
  selector: 'my-app',
  template: require('./app.html'),
  providers: [Customer],
  directives: [ROUTER_DIRECTIVES, CustomerComponent, Colorer, Widgets, Calculator]
})
@Routes([
  {path: '/items', component: Items},
  {path: '/inventory', component: CustomerComponent},
  {path: '/widgets', component: Widgets},
  {path: '/calculator', component: Calculator}
])
export class App {
  constructor(
    private router: Router
  ){}
  

  links = {
    items: ['/items'],
    inventory: ['/inventory'],
    widgets: ['/widgets'],
    calculator: ['/calculator']
  }

  goTo(location: any){
    this.router.navigate(location);
  }
}
