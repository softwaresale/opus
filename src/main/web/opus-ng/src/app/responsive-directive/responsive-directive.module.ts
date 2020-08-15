import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveDirective } from './responsive.directive';

@NgModule({
    declarations: [ResponsiveDirective],
    exports: [
        ResponsiveDirective
    ],
    imports: [
        CommonModule
    ]
})
export class ResponsiveDirectiveModule { }
