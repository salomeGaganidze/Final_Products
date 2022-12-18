import { Component, Input, OnInit } from '@angular/core';
import { userInt } from './userInterface';
@Component({
  selector: 'app-reactive-result',
  templateUrl: './reactive-result.component.html',
  styleUrls: ['./reactive-result.component.css']
})
export class ReactiveResultComponent implements OnInit {
    
  
  @Input() myFormInp!: userInt ;
  @Input() myStart ! :number ;
  
  constructor() { 
 
}

  ngOnInit(): void {
    console.log(this.myFormInp.review)
  }

}
