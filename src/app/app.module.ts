import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ViewDeptComponent } from './view-dept/view-dept.component';
import { AddManagerComponent } from './add-manager/add-manager.component';
import { ViewDeveloperComponent } from './view-developer/view-developer.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDepartmentComponent,
    HeaderComponent,
    ViewDeptComponent,
    AddManagerComponent,
    ViewDeveloperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
