import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CanvasComponent } from './canvas/canvas.component';
import { VrtherapyComponent } from './vrtherapy/vrtherapy.component';
import { UsecaseComponent } from './usecase/usecase.component';
import { HomeComponent } from './home/home.component';
import {SleeploggerComponent } from './sleeplogger/sleeplogger.component';
import { AspireComponent } from './aspire/aspire.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'canvas', component: CanvasComponent},
  { path: 'VRTherapy', component: VrtherapyComponent},
  { path: 'usecase', component: UsecaseComponent},
  { path: 'sleeplogger', component: SleeploggerComponent},
  { path: 'aspire', component: AspireComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
