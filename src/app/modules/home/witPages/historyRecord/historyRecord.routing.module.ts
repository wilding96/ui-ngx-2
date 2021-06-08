/*
 * @Author: Dylan
 * @Date:   2021-03-08 14:48:49
 * @Last Modified by:   Dylan
 * @Last Modified time: 2021-03-08 14:48:50
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryRecordComponent } from './historyRecord.component';

const routes: Routes = [
  { 
    path: 'historyRecord',
    component: HistoryRecordComponent,
    data: {
      title: '设备状态历史记录'
    }
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HistoryRecordRoutingModule { }
