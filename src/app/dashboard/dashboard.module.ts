import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ExamplesModule } from '../examples/examples.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FlexLayoutModule } from '../../../node_modules/@angular/flex-layout';
import { ProviderCardComponent } from './provider-card/provider-card.component';
import { ResultsCardComponent } from './results-card/results-card.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    DashboardRoutingModule,
    ExamplesModule,
    FlexLayoutModule
  ],
  declarations: [DashboardComponent, ProviderCardComponent, ResultsCardComponent]
})
export class DashboardModule { }
