import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QueryNavegatePage } from './query-navegate.page';

const routes: Routes = [
  {
    path: '',
    component: QueryNavegatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QueryNavegatePageRoutingModule {}
