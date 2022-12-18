import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStartsComponent } from './show-starts.component';

describe('ShowStartsComponent', () => {
  let component: ShowStartsComponent;
  let fixture: ComponentFixture<ShowStartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowStartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowStartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
