import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-starts',
  templateUrl: './starts.component.html',
  styleUrls: ['./starts.component.css']
})
export class StartsComponent implements OnInit {
  @Input() starNum  : number =0 ;
  @Output() myOutpt = new EventEmitter<any>() ; 
   mystartsarray!: number[];
   @Input()ratestr: number =0; 
  constructor() { }

  ngOnInit(): void {
    this.mystartsarray= []
    for (let i=0 ; i< this.starNum ; i++ )
    {     this.ratestr = Math.round(this.ratestr)
          this.mystartsarray.push(i+1) ; 
          console.log(this.mystartsarray)
    }

  }

  getStarNumber( num : number)
   {   
    console.log('data')

    if(this.ratestr==num )
    {
      this.ratestr=0;
      return this.myOutpt.emit(this.ratestr);
      
    }
    else {
      
      this.ratestr=num;
      return this.myOutpt.emit(this.ratestr);
    }

  
   }


}
