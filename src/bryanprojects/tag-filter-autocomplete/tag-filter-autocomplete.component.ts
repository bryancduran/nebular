import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { NbTagComponent, NbTagInputDirective } from '@nebular/theme';
import { trees } from '../db/trees-list';

@Component({
  selector: 'npg-tag-filter-autocomplete',
  templateUrl: './tag-filter-autocomplete.component.html',
  styleUrls: ['./tag-filter-autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagFilterAutocompleteComponent {
  tags: Set<string> = new Set<string>();
  options: string[] = trees;

  @ViewChild(NbTagInputDirective, { read: ElementRef }) tagInput: ElementRef<HTMLInputElement>;

  onTagRemove(tagToRemove: NbTagComponent): void {
    this.tags.delete(tagToRemove.text);
    this.options.push(tagToRemove.text);
  }

  onTagAdd(value: string): void {
    if (value) {
      this.tags.add(value);
      this.options = this.options.filter((o) => o !== value);
    }
    this.tagInput.nativeElement.value = '';
  }
}
