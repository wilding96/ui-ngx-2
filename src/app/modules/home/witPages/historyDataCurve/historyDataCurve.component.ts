/*
 * @Author: Dylan
 * @Date:   2021-03-08 14:48:18
 * @Last Modified by:   Dylan
 * @Last Modified time: 2021-05-27
 */
import { Component, OnInit } from "@angular/core";
import { HistoryDataCurveService } from "@app/core/http/history-data-curve.service";
import { any } from "prop-types";

@Component({
  selector: "tb-historyDataCurve",
  templateUrl: "./historyDataCurve.component.html",
  styleUrls: ["./historyDataCurve.component.scss"],
})
export class HistoryDataCurveComponent implements OnInit {
  constructor(private historyDeviceClient: HistoryDataCurveService) {}

  deviceInfo: any;
  deviceAttributes: Array<any>;

  echartData: any;

  //echart
  echarts: any;
  myChart: any;

  ngOnInit() {
  }
  
}
