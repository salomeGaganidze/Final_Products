import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveResultComponent } from './reactive-result.component';

describe('ReactiveResultComponent', () => {
  let component: ReactiveResultComponent;
  let fixture: ComponentFixture<ReactiveResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
