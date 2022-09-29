import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'kilograms',
})
export class KilogramsPipe implements PipeTransform {
    transform(value: number): string {
        return `${value} kg`;
    }
}
