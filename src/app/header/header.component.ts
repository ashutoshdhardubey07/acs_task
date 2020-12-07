import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() parentCount:number;
  @Output() valueChange = new EventEmitter();
  counter = 0;
  constructor() { }

  ngOnInit() {
  }
  valueChanged(){
    this.valueChange.emit(this.counter);
  }
}
