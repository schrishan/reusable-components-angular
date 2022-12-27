import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { CommonModule } from '@angular/common';
import {
  ModalComponent,
  ModalBodyComponent,
  ModalHeaderComponent,
} from './modal/modal.component';
import { TableComponent } from './table/table.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { CardComponent } from './card/card.component';
import { PreloaderService } from './preloader/preloader.service';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardDividerComponent } from './card-divider/card-divider.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { SecondaryButtonComponent } from './secondary-button/secondary-button.component';
import { LinkButtonComponent } from './link-button/link-button.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ToggleClassDirective } from './toggle-class.directive';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SelectboxComponent } from './selectbox/selectbox.component';
import { SelectedPipe } from './selected.pipe';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatNativeDateModule,
  MAT_DATE_FORMATS,
  DateAdapter,
} from '@angular/material/core';
import { LabelComponent } from './label/label.component';
import { CalendarCustomHeaderComponent } from './calendar-custom-header/calendar-custom-header.component';
import { RouterModule } from '@angular/router';
import { DATE_FORMATS, CustomDateAdapter } from './date-picker';
import { SrcDocDirective } from './src-doc/src-doc.directive';
import { PluralizePipe } from './pluralize/pluralize.pipe';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';
import { BackToComponent } from './back-to/back-to.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PgTitleComponent } from './pg-title/pg-title.component';
import { SwitchButtonComponent } from './switch-button/switch-button.component';
import { OMClickDirective } from './directive/omclick.directive';
import { BlockCopyPasteDirective } from './directive/copy-paste.directive';
import { NumberDirective } from './directive/numbers-only.directive';
import { ToasterComponent } from './toaster/toaster.component';
import { ToolTipComponent } from './tooltip/tooltip.component';
import { ToolTipService } from './tooltip/tooltip.services';

import { AccordionBlockComponent } from './accordion-block/accordion-block.component';
import { AccordionItemComponent } from './accordion-block/accordion-item/accordion-item.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { NavTooltipComponent } from 'libs/bt-components/src/lib/nav-tooltip/nav-tooltip.component';
import { HelpSupportComponent } from './help-support/help-support.component';
import { TabsBlockComponent } from './tabs-block/tabs-block.component';
import { TabItemComponent } from './tabs-block/tab-item/tab-item.component';
import { TableBlockComponent } from './table-block/table-block.component';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { RemovableButtonsListComponent } from './removable-buttons-list/removable-buttons-list.component';
import { TabsComponent } from './tabs/tabs.component';
import { AppsCardComponent } from './apps-card/apps-card.component';

@NgModule({
  declarations: [
    NavigationComponent,
    ModalComponent,
    TableComponent,
    PreloaderComponent,
    CardComponent,
    CardHeaderComponent,
    CardDividerComponent,
    CardBodyComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    LinkButtonComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    AccordionComponent,
    ToggleClassDirective,
    CheckboxComponent,
    BackToComponent,
    BreadcrumbComponent,
    SelectboxComponent,
    SelectedPipe,
    DatePickerComponent,
    LabelComponent,
    CalendarCustomHeaderComponent,
    SrcDocDirective,
    PluralizePipe,
    PaginationComponent,
    PgTitleComponent,
    SwitchButtonComponent,
    OMClickDirective,
    BlockCopyPasteDirective,
    NumberDirective,
    ToasterComponent,
    ToolTipComponent,
    AccordionBlockComponent,
    AccordionItemComponent,
    RadioButtonComponent,
    NavTooltipComponent,
    HelpSupportComponent,
    TabsBlockComponent,
    CustomCardComponent,
    RemovableButtonsListComponent,
    TabsComponent,
    TabItemComponent,
    TableBlockComponent,
    AppsCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [
    NavigationComponent,
    ModalComponent,
    TableComponent,
    PreloaderComponent,
    CardComponent,
    CardHeaderComponent,
    CardDividerComponent,
    CardBodyComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    LinkButtonComponent,
    SwitchButtonComponent,
    AccordionComponent,
    BackToComponent,
    PgTitleComponent,
    BreadcrumbComponent,
    ToggleClassDirective,
    CheckboxComponent,
    DatePickerComponent,
    SelectboxComponent,
    LabelComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    SrcDocDirective,
    PluralizePipe,
    PaginationComponent,
    ToasterComponent,
    BlockCopyPasteDirective,
    NumberDirective,
    ToolTipComponent,
    AccordionBlockComponent,
    AccordionItemComponent,
    RadioButtonComponent,
    NavTooltipComponent,
    HelpSupportComponent,
    TabsBlockComponent,
    CustomCardComponent,
    RemovableButtonsListComponent,
    TabsComponent,
    TabItemComponent,
    TableBlockComponent,
    AppsCardComponent
  ],
  providers: [
    PreloaderService,
    ToolTipService,
    { provide: DateAdapter, useClass: CustomDateAdapter },
    {
      provide: MAT_DATE_FORMATS,
      useValue: DATE_FORMATS,
    },
  ],
})
export class BtComponentsModule {}
