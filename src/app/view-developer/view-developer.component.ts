import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-developer',
  templateUrl: './view-developer.component.html',
  styleUrls: ['./view-developer.component.css']
})
export class ViewDeveloperComponent implements OnInit {
  deptList: any =[];
  deptName: any;
  managerName: any;
  totalRuppees: number;

  constructor(public activatedRouter:ActivatedRoute) {
    activatedRouter.params.subscribe((res)=>{
      this.deptName =  res.name
      this.managerName =  res.depName
    })
  }

  ngOnInit() {
    let arr =[]
    arr =  JSON.parse(localStorage.getItem('developer'))
    arr.forEach(element => {
      if(element.managerName == this.managerName){
        this.deptList.push(element)
      }
    });
    if(this.deptList.length){
      this.totalRuppees = this.deptList.length *1100
    }
  }

}
