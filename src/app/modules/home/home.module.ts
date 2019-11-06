import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { ThreeComponent } from './components/three/three.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations:[
    HomeComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent
  ]
})
export class HomeModule { }
