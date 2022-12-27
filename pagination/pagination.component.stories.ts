import { PaginationComponent } from './pagination.component';
import { BrowserModule } from '@angular/platform-browser';
import { object } from '@storybook/addon-knobs';

export default {
  title: 'Components/Pagination',
};

const config = {
  currentPage: 1,
  perPageCount: 2,
  pageCount: 0,
  totalRecordsCount: 10,
};
export const Basic = () => ({
  moduleMetadata: {
    imports: [BrowserModule],
    declarations: [PaginationComponent],
  },
  component: PaginationComponent,
  template: `
  <bt-pagination [config]="config"></bt-pagination>
  `,
  props: {
    config: object('Config', config)
  },
});
