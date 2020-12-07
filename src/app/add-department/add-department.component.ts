import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  showForm: boolean;
  model: any = {};

  constructor() { }

  ngOnInit() {
  }
  displayCounter(count) {
    this.showForm = true;
    console.log(count)
  }
  onSubmit() {
    // console.log(this.model)
    let department = this.model;
    let depList = JSON.parse(localStorage.getItem('department'));
    if(depList){
      depList.push(department);
      localStorage.setItem('department', JSON.stringify(depList));
    }else{
      let arr = [];
      arr.push(department);
      localStorage.setItem('department', JSON.stringify(arr));
    }
    console.log(department);
  }


}
