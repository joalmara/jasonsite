import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CanvasComponent } from './canvas/canvas.component';
import { UsecaseComponent } from './usecase/usecase.component';
import { VrtherapyComponent } from './vrtherapy/vrtherapy.component';
import { PrototypeSliderComponent } from './prototype-slider/prototype-slider.component';
import { ResearchCanvasComponent } from './research-canvas/research-canvas.component';
import { SliderComponent } from './slider/slider.component';
import { UsecasepptComponent } from './usecaseppt/usecaseppt.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel'

import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import { SleeploggerComponent } from './sleeplogger/sleeplogger.component';
import { AspireComponent } from './aspire/aspire.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CanvasComponent,
    UsecaseComponent,
    VrtherapyComponent,
    PrototypeSliderComponent,
    ResearchCanvasComponent,
    SliderComponent,
    UsecasepptComponent,
    AboutComponent,
    HomeComponent,
    SleeploggerComponent,
    AspireComponent,
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
