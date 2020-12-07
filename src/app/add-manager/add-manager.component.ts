import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css']
})
export class AddManagerComponent implements OnInit {
  model: any = {}
  show: boolean;
  managerList: any =[];
  deptName: any;
  constructor(public activateRouter:ActivatedRoute) {
    activateRouter.params.subscribe((res)=>{
      console.log(res.name)
      this.deptName = res.name
    })
  }

  ngOnInit() {
    let arr  = JSON.parse(localStorage.getItem('manager'))
    arr.forEach(element => {
      if(element.depName  ==this.deptName ){
        this.managerList.push(element)
      }
    });
    console.log(">>>>>>>", this.managerList)
  }
  showForm(deptName,managerName) {
    this.model.departmentname = deptName
    this.model.managerName = managerName
    this.show= true;
  }

  onSubmit() {
    // console.log(this.model)
    let developer = this.model;
    let developerList = JSON.parse(localStorage.getItem('developer'));
    if(developerList){
      developerList.push(developer);
      localStorage.setItem('developer', JSON.stringify(developerList));
    }else{
      let arr = [];
      arr.push(developer);
      localStorage.setItem('developer', JSON.stringify(arr));
    }
    console.log(developer);
  }
}
