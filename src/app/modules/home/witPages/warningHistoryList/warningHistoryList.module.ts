/*
 * @Author: Dylan
 * @Date:   2021-03-08 14:49:12
 * @Last Modified by:   Dylan
 * @Last Modified time: 2021-03-08 14:49:13
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "@app/shared/shared.module";
import { HomeComponentsModule } from "@modules/home/components/home-components.module";
import { WarningHistoryListComponent } from '@home/witPages/warningHistoryList/warningHistoryList.component';
import { DashboardModule } from "@home/pages/dashboard/dashboard.module";
import { WarningHistoryListRoutingModule } from "@app/modules/home/witPages/warningHistoryList/warningHistoryList.routing.module";

@NgModule({
  declarations: [WarningHistoryListComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeComponentsModule,
    DashboardModule,
    WarningHistoryListRoutingModule
  ]
})
export class WarningHistoryListModule { }
