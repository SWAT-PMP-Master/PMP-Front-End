import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../material/material.module';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { DescriptionComponent } from './components/description/description.component';
import { TeamComponent } from './components/team/team.component';


@NgModule({
  declarations: [HomeComponent, BannerComponent, DescriptionComponent, TeamComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
