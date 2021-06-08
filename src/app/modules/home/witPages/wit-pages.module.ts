/*
 * @Author: Dylan
 * @Date:   2021-03-08 14:49:23
 * @Last Modified by:   Dylan
 * @Last Modified time: 2021-03-10 14:30:59
 */
import { NgModule } from "@angular/core";
import { modulesMap } from '@app/modules/common/modules-map';
import { MODULES_MAP } from '@app/shared/public-api';

import { WarningHistoryListModule } from './warningHistoryList/warningHistoryList.module';
import { HistoryRecordModule } from "./historyRecord/historyRecord.module";
import { HistoryDataCurveModule } from './historyDataCurve/historyDataCurve.module';
import { KPIHistoryInfoModule } from './KPIHistoryInfo/KPIHistoryInfo.module';

@NgModule({
  exports: [
    WarningHistoryListModule,
    HistoryRecordModule,
    HistoryDataCurveModule,
    KPIHistoryInfoModule
  ],
  providers: [
    {
      provide: MODULES_MAP,
      useValue: modulesMap
    }
  ]
})

export class WitPagesModules { }