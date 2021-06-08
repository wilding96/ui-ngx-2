/*
 * @Author: Dylan
 * @Date:   2021-03-08 14:48:21
 * @Last Modified by:   Dylan
 * @Last Modified time: 2021-03-08 14:48:21
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { HistoryDataCurveComponent } from './historyDataCurve.component';
import { HistoryDataCurveRoutingModule } from './historyDataCurve.routing.module';

@NgModule({
  imports: [
    CommonModule,
    HistoryDataCurveRoutingModule,
    SharedModule
  ],
  declarations: [HistoryDataCurveComponent]
})
export class HistoryDataCurveModule { }
