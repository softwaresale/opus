import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from './page-container.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ResponsiveDirectiveModule } from '../responsive-directive/responsive-directive.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { PageContainerActionsDirective } from './page-container-actions.directive';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [PageContainerComponent, PageContainerActionsDirective],
  imports: [
    CommonModule,
    ResponsiveDirectiveModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule,
    MatChipsModule,
  ],
  exports: [PageContainerComponent, PageContainerActionsDirective],
})
export class PageContainerModule { }
