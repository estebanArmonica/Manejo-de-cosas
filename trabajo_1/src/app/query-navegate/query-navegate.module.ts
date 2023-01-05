import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QueryNavegatePageRoutingModule } from './query-navegate-routing.module';

import { QueryNavegatePage } from './query-navegate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QueryNavegatePageRoutingModule
  ],
  declarations: [QueryNavegatePage]
})
export class QueryNavegatePageModule {}
