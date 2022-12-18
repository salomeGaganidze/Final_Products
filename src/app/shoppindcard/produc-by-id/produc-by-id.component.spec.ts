import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducByIdComponent } from './produc-by-id.component';

describe('ProducByIdComponent', () => {
  let component: ProducByIdComponent;
  let fixture: ComponentFixture<ProducByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
