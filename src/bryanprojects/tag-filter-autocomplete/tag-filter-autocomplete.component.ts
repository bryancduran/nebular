import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NbTagComponent, NbTagInputDirective } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { trees } from '../db/trees-list';

@Component({
  selector: 'npg-tag-filter-autocomplete',
  templateUrl: './tag-filter-autocomplete.component.html',
  styleUrls: ['./tag-filter-autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagFilterAutocompleteComponent implements OnInit {
  tags: Set<string> = new Set<string>();
  filteredOptions$: Observable<string[]>;
  options: string[] = trees;

  @ViewChild(NbTagInputDirective, { read: ElementRef }) tagInput: ElementRef<HTMLInputElement>;
  status: string = 'basic';

  ngOnInit() {
    this.filteredOptions$ = of(this.options);
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((optionValue) => optionValue.toLowerCase().includes(filterValue));
  }

  onChange() {
    this.filteredOptions$ = this.getFilteredOptions(this.tagInput.nativeElement.value);
  }

  getFilteredOptions(value: string): Observable<string[]> {
    return of(value).pipe(
      map((filterString) => {
        const filtered = this.filter(filterString);
        if (filtered.length > 0) {
          this.status = 'basic';
          return this.filter(filterString);
        } else {
          this.status = 'danger';
          return null;
        }
      }),
    );
  }

  onTagRemove(tagToRemove: NbTagComponent): void {
    this.tags.delete(tagToRemove.text);
    this.options.push(tagToRemove.text);
  }

  onTagAdd(value: string): void {
    if (value && this.options.includes(value)) {
      this.tags.add(value);
      this.options = this.options.filter((o) => o !== value);
      this.tagInput.nativeElement.value = '';
    }
  }
}
