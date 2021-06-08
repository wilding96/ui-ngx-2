/*
 * @Author: Dylan
 * @Date:   2021-03-08 14:49:50
 * @Last Modified by:   Dylan
 * @Last Modified time: 2021-03-08 14:51:22
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QueryDeviceInfo, PageData } from '@app/shared/public-api';
import { defaultHttpOptionsFromConfig, RequestConfig } from './http-utils';


@Injectable({
  providedIn: 'root'
})
export class HistoryRecordService {

constructor(
  private http: HttpClient
) { }

public queryDeviceList(config?: RequestConfig) {
  return this.http.post<PageData<string>>(`/api/queryDeviceList`, defaultHttpOptionsFromConfig(config))
}

public queryDeviceInfo(deviceName: String, config?: RequestConfig) {
  return this.http.post<QueryDeviceInfo<string>>(`/api/queryDeviceInfo`, {
    "deviceName": deviceName
  }, defaultHttpOptionsFromConfig(config))
}

}
