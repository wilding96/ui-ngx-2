/*
 * @Author: Dylan
 * @Date:   2021-03-08 14:30:45
 * @Last Modified by:   Dylan
 * @Last Modified time: 2021-03-08 14:50:40
 */

export interface QueryDeviceInfo<T> {
  deviceRecord: Object;
  deviceStateLogVos: Array<T>;
  mapList: Array<T>;
}