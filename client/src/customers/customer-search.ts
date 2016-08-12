import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'customer-search',
    template: `<form action="#">
        <div class="mdl-textfield mdl-js-textfield">
            <input class="mdl-textfield__input" type="text" id="search" (input)="term">
            <label class="mdl-textfield__label" for="search">Search</label>
        </div>
    </form>
    `
})
export class CustomerSearch {
    @Input() term;
    @Output() update = new EventEmitter();
}