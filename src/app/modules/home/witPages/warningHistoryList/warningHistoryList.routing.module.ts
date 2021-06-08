/*
 * @Author: Dylan
 * @Date:   2021-03-08 14:49:15
 * @Last Modified by:   Dylan
 * @Last Modified time: 2021-03-08 14:49:15
 */
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { Authority } from "@shared/models/authority.enum";
import { WarningHistoryListComponent } from "@home/witPages/warningHistoryList/warningHistoryList.component";

const routes: Routes = [
  { 
    path: 'warningHistoryList',
    component: WarningHistoryListComponent,
    data: {
      auth: [Authority.TENANT_ADMIN],
      title: '参数报警信息历史清单',
      breadcrumb: {
        label: '参数报警信息历史清单',
        icon: 'table_chart'
      }
    }
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WarningHistoryListRoutingModule { }