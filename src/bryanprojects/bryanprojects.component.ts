import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  templateUrl: './bryanprojects.component.html',
  styleUrls: ['../playground/styles/styles.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BryanprojectsComponent implements OnInit {
  constructor(private themeService: NbThemeService) {}

  ngOnInit() {
    this.themeService.changeTheme('default');
  }
}
