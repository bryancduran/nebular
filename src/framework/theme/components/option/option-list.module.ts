import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbOptionComponent } from './option.component';
import { NbOptionGroupComponent } from './option-group.component';
import { NbOptionListComponent } from './option-list.component';
import { NbCheckboxModule } from '../checkbox/checkbox.module';
import { NbIconModule } from '../icon/icon.module';

const NB_OPTION_LIST_COMPONENTS = [NbOptionListComponent, NbOptionComponent, NbOptionGroupComponent];

@NgModule({
  declarations: [...NB_OPTION_LIST_COMPONENTS],
  imports: [CommonModule, NbCheckboxModule, NbIconModule],
  exports: [...NB_OPTION_LIST_COMPONENTS],
})
export class NbOptionModule {}
