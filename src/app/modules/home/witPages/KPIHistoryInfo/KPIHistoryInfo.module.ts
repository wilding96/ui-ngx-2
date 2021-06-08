/*
 * @Author: Dylan
 * @Date:   2021-03-10 14:19:17
 * @Last Modified by:   Dylan
 * @Last Modified time: 2021-03-10 15:19:50
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KPIHistoryInfoComponent } from './KPIHistoryInfo.component';
import { KPIHistoryInfoRoutingModule } from './KPIHistoryInfo.routing.module';
import { SharedModule } from '@app/shared/public-api';

@NgModule({
  imports: [
    CommonModule,
    KPIHistoryInfoRoutingModule,
    SharedModule
  ],
  declarations: [KPIHistoryInfoComponent]
})
export class KPIHistoryInfoModule { }
