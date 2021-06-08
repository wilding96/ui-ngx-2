///
/// Copyright © 2016-2020 The Thingsboard Authors
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

/**
 * 这个文件是angular根模块，告诉angular如何组装应用，
 * 根模块不需导出任何东西，因为其他组件不需要导入 根模块
 */
// BrowserModel 浏览器解析的模块
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Angular核心模块
import { NgModule } from '@angular/core';
// 路由
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@core/core.module';
import { LoginModule } from '@modules/login/login.module';
import { HomeModule } from '@home/home.module';
// 根组件
import { AppComponent } from './app.component';
import { DashboardRoutingModule } from '@modules/dashboard/dashboard-routing.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '**',
    redirectTo: 'home'
  }
];

/**
 * NgModule装饰器，接受一个元数据对象，告诉Angular如何编译和启动应用
 */
@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageNotFoundRoutingModule { }


@NgModule({
  // 配置当前运行的组件
  declarations: [
    AppComponent
  ],
  // imports配置当前模块运行依赖的其他模块
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    LoginModule,
    HomeModule,
    DashboardRoutingModule,
    PageNotFoundRoutingModule
  ],
  // 配置项目所需的服务
  providers: [],
  // 指定应用的主视图，通过引导根AppModule来启动应用这一般是写的是根组件
  bootstrap: [AppComponent]
})
export class AppModule { }
