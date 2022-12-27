import { NativeDateAdapter } from '@angular/material/core';
import { Platform } from '@angular/cdk/platform';
import { Injectable } from '@angular/core';

export const DATE_FORMATS = {
  parse: { dateInput: null },
  display: {
    dateInput: {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      type: 'dateInput',
    },
    monthYearLabel: { year: 'numeric', month: 'long' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
  },
};

@Injectable()
export class CustomDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: any): string {
    if (displayFormat && displayFormat.type === 'dateInput') {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return this._to2digit(day) + '/' + this._to2digit(month) + '/' + year;
    } else {
      return super.format(date, displayFormat);
    }
  }

  private _to2digit(n: number) {
    return ('00' + n).slice(-2);
  }
}
