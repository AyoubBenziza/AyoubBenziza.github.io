import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BenchmarkComponent } from './benchmark/benchmark.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SalaryComponent } from './salary/salary.component';
import { CoachingComponent } from './coaching/coaching.component';

@NgModule({
  declarations: [
    AppComponent,
    BenchmarkComponent,
    NavigationComponent,
    SalaryComponent,
    CoachingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
