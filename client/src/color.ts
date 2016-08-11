import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
    selector: '[colorer]',
    host: {
        '(mouseenter)': 'color()',
        '(mouseleave)': 'color2()'
    }
})
export class Colorer {
    @Input('colorer') defaultColor: string;

    constructor(private _el: ElementRef) { }

    color() {
        this._el.nativeElement.style.color = 'red';
    }

    color2() {
        this._el.nativeElement.style.color = this.defaultColor;
    }
}