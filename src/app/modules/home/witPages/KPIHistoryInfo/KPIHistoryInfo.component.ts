/*
 * @Author: Dylan
 * @Date:   2021-03-10 14:19:14
 * @Last Modified by:   Dylan
 * @Last Modified time: 2021-05-27
 */
import { Component, OnInit } from '@angular/core';
import { KPIHistoryInfoService } from '@app/core/http/wit-service/KPI-history-info.service';
// import * as echarts from "echarts";

@Component({
  selector: 'tb-KPIHistoryInfo',
  templateUrl: './KPIHistoryInfo.component.html',
  styleUrls: ['./KPIHistoryInfo.component.scss']
})
export class KPIHistoryInfoComponent implements OnInit {

  constructor(
    private KPIHistoryInfoService: KPIHistoryInfoService
  ) { }

  dimensionInfos: any;

  //echart
  echarts: any;
  myChart: any;

  ngOnInit() {
    // this.KPIHistoryInfoService
    // .queryKPIInfo()
    // .subscribe(item=> {
    //   console.log(item);
    //   this.dimensionInfos = item.dimensionInfos
    //   setTimeout(() => {
    //     this.initEchart()
    //   }, 500);
    // })
  }

  
}
