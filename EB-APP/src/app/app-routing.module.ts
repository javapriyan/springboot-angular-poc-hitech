import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceNumberComponent } from './service-number/service-number.component';
import { CalculateComponent } from './calculate/calculate.component';
import { HistoryComponent } from './history/history.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: ServiceNumberComponent,
  },
  {
    path: 'calculate',
    component: CalculateComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
  },
  {
    path: 'edit/:id',
    component: EditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
