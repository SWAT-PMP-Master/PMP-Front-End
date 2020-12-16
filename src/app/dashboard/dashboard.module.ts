import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSpinnerModule } from 'ngx-spinner';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { MaterialModule } from './../material/material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [DashboardComponent, ProfileComponent, NavComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule,
    MaterialModule,
    NgxSpinnerModule,
    NgxChartsModule,
  ],
})
export class DashboardModule {}
