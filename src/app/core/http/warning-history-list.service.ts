/*
 * @Author: Dylan
 * @Date:   2021-03-08 14:49:59
 * @Last Modified by:   Dylan
 * @Last Modified time: 2021-03-11 17:27:28
 */
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { PageData } from '@app/shared/models/page/page-data';
import { PageLink } from '@app/shared/models/page/page-link';
import { defaultHttpOptionsFromConfig, RequestConfig } from './http-utils';

@Injectable({
  providedIn: 'root'
})

export class WarningHistoryListService {
  constructor(
    private http: HttpClient
  ) { }

  public getHistoryList(startTime: string, endTime: string, config?: RequestConfig) {
    return this.http.post<PageData<string>>(`/api/queryLogList`, {
      "startTime": startTime, 
      "endTime": endTime, 
      "pageSize": 5,
      "pageNum": 1
    }, defaultHttpOptionsFromConfig(config))
  }
}