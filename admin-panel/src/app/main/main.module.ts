import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainViewComponent } from './main-view/main-view.component';
import { LayoutModule } from '../layout/layout.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainViewComponent, MainComponent],
  imports: [CommonModule, MainRoutingModule, LayoutModule],
})
export class MainModule {}
