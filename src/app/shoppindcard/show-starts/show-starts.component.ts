import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-show-starts',
  templateUrl: './show-starts.component.html',
  styleUrls: ['./show-starts.component.css'],
})
export class ShowStartsComponent implements OnInit, OnChanges {
  @Input() myStarst!: number;
  starNumArray: number [] = [] ;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.starNumArray=[];
    for (let i = 0; i < this.myStarst; i++) {
      this.starNumArray.push(i+1);
    } 

  }

  ngOnInit(): void {
    console.log(this.myStarst || 'on init');
  }




}