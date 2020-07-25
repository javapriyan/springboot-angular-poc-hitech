import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceNumberComponent } from './service-number/service-number.component';
import { CalculateComponent } from './calculate/calculate.component';
import { HistoryComponent } from './history/history.component';
import { EditComponent } from './edit/edit.component';
import { ServiceGuard } from './service.guard';

const routes: Routes = [
  {
    path: '',
    component: ServiceNumberComponent,
  },
  {
    path: 'calculate',
    component: CalculateComponent,
    canActivate: [ServiceGuard],
  },
  {
    path: 'history',
    component: HistoryComponent,
    canActivate: [ServiceGuard],
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    canActivate: [ServiceGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
