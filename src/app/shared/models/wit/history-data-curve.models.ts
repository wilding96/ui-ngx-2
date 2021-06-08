/*
 * @Author: Dylan
 * @Date:   2021-03-09 10:38:39
 * @Last Modified by:   Dylan
 * @Last Modified time: 2021-03-09 10:47:33
 */

export interface QueryDeviceClient<T> {
  deviceAttributes: Array<T>;
  deviceInfo: Object;
}