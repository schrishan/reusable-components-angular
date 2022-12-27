import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selected'
})
export class SelectedPipe implements PipeTransform {
  transform(
    value: { select: boolean; label?: string }[] | null | undefined,
    select = 'select',
    label = 'label'
  ): unknown {
    if (!value || !value.length) {
      return 'Select';
    }

    const selectedItems = value.filter(v => (v as any)[select]);

    if (selectedItems.length) {
      return (selectedItems[0] as any)[label];
    } else {
      return (value[0] as any)[label];
    }
  }
}
