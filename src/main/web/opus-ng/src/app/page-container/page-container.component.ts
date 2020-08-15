import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.sass'],
})
export class PageContainerComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  navLink?: string;

  @Input()
  actions: TemplateRef<any>;

  @Input()
  styleClass?: string;

  @Input()
  mobileStyleClass?: string;

  constructor() { }

  ngOnInit(): void {
  }

  get navTooltip(): string {
    return `Go to ${this.title}`;
  }

  get mobileClass(): string {
    if (this.mobileStyleClass) {
      return this.mobileStyleClass;
    } else if (this.styleClass) {
      return this.styleClass;
    } else {
      return 'main-container-mobile';
    }
  }

  get desktopClass(): string {
    if (this.styleClass) {
      return this.styleClass;
    } else {
      return 'main-container-desktop';
    }
  }
}
