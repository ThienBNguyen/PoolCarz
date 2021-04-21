import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {

  @Input() innerVarAssignedFromOuter:any;


  //to allow outside to attach an event listerner, need to use @outPut()
  @Output() sendOut: EventEmitter<string> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

}
