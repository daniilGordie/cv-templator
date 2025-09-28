import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCaseToWords',
  standalone: true
})
export class CamelCaseToWordsPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    const withSpaces = value.replace(/([a-z])([A-Z])/g, '$1 $2');

    return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
  }
}
