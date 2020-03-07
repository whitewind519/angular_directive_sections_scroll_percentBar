import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PercentbarComponent } from './percentbar/percentbar.component';
import { SectionFirstComponent } from './section-first/section-first.component';
import { SectionSecondComponent } from './section-second/section-second.component';
import { ScrollPercentageDirective } from './scroll-percentage.directive';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule
   ],
  declarations: [ AppComponent, ScrollPercentageDirective, PercentbarComponent, SectionFirstComponent, SectionSecondComponent, ScrollPercentageDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
