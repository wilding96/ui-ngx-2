/*
 * @Author: Dylan
 * @Date:   2021-03-08 14:49:08
 * @Last Modified by:   Dylan
 * @Last Modified time: 2021-03-08 14:49:09
 */
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "@core/core.state";
import { PageComponent } from "@shared/components/page.component";
import { Dashboard } from "@shared/models/dashboard.models";
import { FormGroup, FormControl } from "@angular/forms";
import { WarningHistoryListService } from '@app/core/http/warning-history-list.service';
import { EntityTableConfig } from '../../models/entity/entities-table-config.models';
import { PageEvent } from '@angular/material/paginator';

// export interface HistoryList {
//   deviceName: string;
//   sourceAttribute: string;
//   level: number;
//   source: string;
//   startTime: string;
//   type: string;
//   info: string;
//   eventName: string;
//   description: string;
//   warnRecipient: string;
// }
@Component({
  selector: "tb-warningHistoryList",
  templateUrl: "./warningHistoryList.component.html",
  styleUrls: ["./warningHistoryList.component.scss"],
})
export class WarningHistoryListComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
    private warningHistoryListService: WarningHistoryListService
  ) {}

  // private readonly config: EntityTableConfig<T>

  HistoryList: any;
  displayedColumns: string[] = [
    "deviceName",
    "sourceAttribute",
    "source",
    "startTime",
    "type",
    "info",
    "eventName",
    "description",
    "warnRecipient",
  ];
  warningHistoryListDashboard: Dashboard;

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [ 10, 20];

  pageEvent: PageEvent;


  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  getList() {
    let startTime = this.range.value.start.valueOf();
    let endTime = this.range.value.end.valueOf();
    // this.config
    this.warningHistoryListService
      .getHistoryList(startTime, endTime)
      .subscribe((item) => {
        this.HistoryList = item.data;
      });
  }

  ngOnInit() {}
}
