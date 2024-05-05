import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], searchTerm: string): any[] {
    if (!value || !searchTerm) {
      return value;
    }

    searchTerm = searchTerm.toLowerCase();

    return value.filter(item => {
      return item.name.toLowerCase().includes(searchTerm);
    });
  }
}
