import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { QueryKPIInfo } from '@app/shared/public-api';
import { defaultHttpOptionsFromConfig, RequestConfig } from '../http-utils';

@Injectable({
  providedIn: 'root'
})

export class KPIHistoryInfoService {
  constructor(
    private http: HttpClient
  ) {}

  public queryKPIInfo(config?: RequestConfig) {
    return this.http.post<QueryKPIInfo<string>>(`/api/queryKPIInfo`, {
      "deviceName": "device_all",
      "date": 1614787200000,
      "type":"hour"
    }, defaultHttpOptionsFromConfig(config))
  }
}