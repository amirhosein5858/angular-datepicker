import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydatepickerComponent } from './mydatepicker.component';

describe('MydatepickerComponent', () => {
  let component: MydatepickerComponent;
  let fixture: ComponentFixture<MydatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MydatepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MydatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
