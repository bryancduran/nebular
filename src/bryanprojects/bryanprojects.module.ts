import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BryanprojectsRoutingModule } from './bryanprojects-routing.module';
import { TagFilterAutocompleteComponent } from './tag-filter-autocomplete/tag-filter-autocomplete.component';
import { BryanprojectsComponent } from './bryanprojects.component';
import {
  NbAutocompleteModule,
  NbCardModule,
  NbFormFieldModule,
  NbIconLibraries,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbTagModule,
} from '@nebular/theme';
import { TagRoutingModule } from 'src/playground/with-layout/tag/tag-routing.module';
import { csharp } from 'ngx-simple-icons';

@NgModule({
  declarations: [TagFilterAutocompleteComponent, BryanprojectsComponent],
  imports: [
    NbLayoutModule,
    CommonModule,
    BryanprojectsRoutingModule,
    NbCardModule,
    NbTagModule,
    NbFormFieldModule,
    NbIconModule,
    NbInputModule,
    NbAutocompleteModule,
    TagRoutingModule,
  ],
})
export class BryanprojectsModule {
  constructor(iconsLibrary: NbIconLibraries) {
    iconsLibrary.registerSvgPack('simpleIcons', { csharp: csharp });
  }
}
