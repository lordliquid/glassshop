import {Component} from '@angular/core';

@Component({
    selector: 'calculator',
    template: require('./calculator.component.html'),
})
export class Calculator {

    width: number;
    height: number;
    result: number;
    sqrFt: number;
    price: number;
    tempered: boolean;
    
    constructor(){
        this.width = 0;
        this.height = 0;
        this.result = 0;
        this.price = 0;
    }

    calculate() {
        let sqrInch = this.width * this.height;
        this.result = 0;
        
        this.sqrFt = this.round(sqrInch / 144); 

        this.addToTotal(this.sqrFt * this.price);

        if (isNaN(this.result)) {
            this.result = 0;
        }        
    }

    addToTotal(amount) {
        this.result += this.round(amount); 
    }

    round(num): number {
        return parseFloat((num).toFixed(2));
    }
}