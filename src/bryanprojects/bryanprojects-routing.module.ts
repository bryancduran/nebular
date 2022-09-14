import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BryanprojectsComponent } from './bryanprojects.component';
import { TagFilterAutocompleteComponent } from './tag-filter-autocomplete/tag-filter-autocomplete.component';

const routes: Routes = [
  {
    path: '',
    component: BryanprojectsComponent,
    children: [
      {
        path: 'tag',
        component: TagFilterAutocompleteComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BryanprojectsRoutingModule {}
