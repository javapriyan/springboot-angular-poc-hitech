import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceNumberComponent } from './service-number/service-number.component';
import { CalculateComponent } from './calculate/calculate.component';

const routes: Routes = [
  {
    path: '',
    component: ServiceNumberComponent,
  },
  {
    path: 'calculate',
    component: CalculateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
