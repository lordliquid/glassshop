import {Pipe} from '@angular/core';

@Pipe({
    name: 'search'
})
export class SearchPipe {
    transform(value, [term]) {
        return value.filter((item) => item.name.toLowerCase().includes(term.toLowerCase()));
    }
}