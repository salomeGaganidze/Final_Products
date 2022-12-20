import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyDirective]',
})
export class MyDirectiveDirective {
  @Input() appMyDirective: any;
  constructor(private myElement: ElementRef) {}

  ngOnInit() {
    console.log(this.appMyDirective);
    this.getvalue();
  }
  getvalue() {
    if (this.appMyDirective <= 2) {
      this.myElement.nativeElement.style.color = 'red';
    }
    if (this.appMyDirective > 2 && this.appMyDirective <= 3) {
      this.myElement.nativeElement.style.color = 'yellow';
    }
    if (this.appMyDirective > 3 && this.appMyDirective <= 5) {
      this.myElement.nativeElement.style.color = 'Green';
    }

  }
}
