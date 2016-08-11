import {Component} from '@angular/core';

@Component({
    selector: 'calculator',
    template: require('./calculator.component.html'),
})
export class Calculator {
    
    unit: any = {
        width: 0,
        height: 0,
        result: 0,
        sqrFt: 0,
        price: 0,
        tempered: false,
        bars: false
    }

    constructor() {
        
    }

    calculate() {
        let sqrInch = this.unit.width * this.unit.height;
        this.unit.result = 0;

        this.unit.sqrFt = this.round(sqrInch / 144);

        this.addToTotal(this.unit.sqrFt * this.unit.price);

        if (isNaN(this.unit.result)) {
            this.unit.result = 0;
        }
    }

    addToTotal(amount) {
        this.unit.result += this.round(amount);
    }

    round(num): number {
        return parseFloat((num).toFixed(2));
    }

    toggleBars() {
        if (!this.unit.bars) {
            this.addBars();
        } else {
            this.removeBars();
        }
        this.calculate();
    }

    addBars() {
        this.unit.price = this.round(parseFloat(this.unit.price) + 1.90);
    }

    removeBars() {
        this.unit.price = this.round(parseFloat(this.unit.price) - 1.90);
    }
}