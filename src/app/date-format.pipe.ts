import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: Date): string {
    if (value instanceof Date) {
      const day = value.getDate().toString().padStart(2, '0');
      const month = (value.getMonth() + 1).toString().padStart(2, '0'); // Note: Months are zero-based
      const year = value.getFullYear();

      return `${day}-${month}-${year}`;
    }

    return '';
  }
}
