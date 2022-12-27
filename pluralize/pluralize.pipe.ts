import { Pipe, PipeTransform } from '@angular/core';

export const initialConfig = {
  none: '_NONE',
  one: '_ONE',
  many: '_MANY'
};

@Pipe({
  name: 'pluralize'
})
export class PluralizePipe implements PipeTransform {
  transform(value: string, count: number, config = initialConfig): string {
    const type =
      count === 0 ? config.none : count === 1 ? config.one : config.many;
    return value + type;
  }
}
