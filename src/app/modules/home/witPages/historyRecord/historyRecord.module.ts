/*
 * @Author: Dylan
 * @Date:   2021-03-08 14:48:46
 * @Last Modified by:   Dylan
 * @Last Modified time: 2021-03-08 14:48:47
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "@app/shared/shared.module";
import { HistoryRecordComponent } from './historyRecord.component';
import { HistoryRecordRoutingModule } from './historyRecord.routing.module';

@NgModule({
  declarations: [HistoryRecordComponent],
  imports: [
    CommonModule,
    HistoryRecordRoutingModule,
    SharedModule
  ]
})
export class HistoryRecordModule { }
