import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-view-dept',
  templateUrl: './view-dept.component.html',
  styleUrls: ['./view-dept.component.css']
})
export class ViewDeptComponent implements OnInit {
  deptList: any = [];
  counter: any;
  model: any = {};
  show: boolean;
  constructor() { }

  ngOnInit() {
    this.deptList = JSON.parse(localStorage.getItem('department'))
  }
  showForm(data) {
    this.model.depName = data
    this.show = true
  }
  onSubmit() {
    let manager = this.model;
    let managerList = JSON.parse(localStorage.getItem('manager'));
    if(managerList){
      managerList.push(manager);
      localStorage.setItem('manager', JSON.stringify(managerList));
    }else{
      let arr = [];
      arr.push(manager);
      localStorage.setItem('manager', JSON.stringify(arr));
    }
  }
}
