import { ViewDeveloperComponent } from './view-developer/view-developer.component';
import { AddManagerComponent } from './add-manager/add-manager.component';
import { ViewDeptComponent } from './view-dept/view-dept.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',component:AddDepartmentComponent},
  {path:'view',component:ViewDeptComponent},
  {path:'view-manager/:name',component:AddManagerComponent},
  {path:'view-developer/:name/:depName',component:ViewDeveloperComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
