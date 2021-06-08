/*
 * @Author: Dylan
 * @Date:   2021-03-09 10:04:09
 * @Last Modified by:   Dylan
 * @Last Modified time: 2021-03-09 10:48:30
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QueryDeviceClient } from '@app/shared/public-api';
import { defaultHttpOptionsFromConfig, RequestConfig } from './http-utils';

@Injectable({
  providedIn: 'root'
})
export class HistoryDataCurveService {

constructor(
  private http: HttpClient
) { }

public queryDeviceClient(deviceName: string, config?: RequestConfig) {
  return this.http.post<QueryDeviceClient<string>>(`/api/queryDeviceClient`,  {
    "deviceName": deviceName
  }, defaultHttpOptionsFromConfig(config))
}

}
