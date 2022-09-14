import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BryanprojectsRoutingModule } from './bryanprojects-routing.module';
import { TagFilterAutocompleteComponent } from './tag-filter-autocomplete/tag-filter-autocomplete.component';
import { BryanprojectsComponent } from './bryanprojects.component';
import { NbLayoutModule } from '@nebular/theme';

@NgModule({
  declarations: [TagFilterAutocompleteComponent, BryanprojectsComponent],
  imports: [CommonModule, BryanprojectsRoutingModule, NbLayoutModule],
})
export class BryanprojectsModule {}
