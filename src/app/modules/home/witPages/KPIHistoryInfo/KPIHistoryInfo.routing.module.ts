/*
 * @Author: Dylan
 * @Date:   2021-03-10 14:23:09
 * @Last Modified by:   Dylan
 * @Last Modified time: 2021-03-10 14:29:35
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KPIHistoryInfoComponent } from './KPIHistoryInfo.component';

const routes: Routes = [
  { 
    path: 'KPIHistoryInfo',
    component: KPIHistoryInfoComponent,
    data: {
      title: 'KPI历史趋势'
    }
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class KPIHistoryInfoRoutingModule { }
