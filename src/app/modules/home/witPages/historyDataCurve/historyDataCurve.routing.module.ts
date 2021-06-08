/*
 * @Author: Dylan
 * @Date:   2021-03-08 14:48:23
 * @Last Modified by:   Dylan
 * @Last Modified time: 2021-03-08 14:48:24
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryDataCurveComponent } from './historyDataCurve.component';

const routes: Routes = [
  { 
    path: 'historyDataCurve',
    component: HistoryDataCurveComponent,
    data: {
      title: '某一工艺参数的历史数据曲线'
    }
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HistoryDataCurveRoutingModule { }
