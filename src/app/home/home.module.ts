import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { DescriptionSectionComponent } from './components/description-section/description-section.component';
import { OurTeamComponent } from './components/our-team/our-team.component';


@NgModule({
  declarations: [HomeComponent, BannerComponent, DescriptionSectionComponent, OurTeamComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
