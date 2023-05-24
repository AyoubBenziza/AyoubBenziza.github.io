import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BenchmarkComponent } from './benchmark/benchmark.component';
import { SalaryComponent } from './salary/salary.component';
import { CoachingComponent } from './coaching/coaching.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'benchmark',
    pathMatch: 'full',
  },
  {
    path: 'benchmark',
    component: BenchmarkComponent,
  },
  {
    path: 'salary',
    component: SalaryComponent,
  },
  {
    path: 'coaching',
    component: CoachingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
