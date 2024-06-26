import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return `${value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} VND`;
  }

}
