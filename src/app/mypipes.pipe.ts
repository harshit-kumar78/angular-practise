import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipes',
})
export class MypipesPipe implements PipeTransform {
  transform(value: string, gender: string): string {
    if (gender == 'male') {
      return 'mr.' + value;
    }
    return 'mrs.' + value;
  }
}
