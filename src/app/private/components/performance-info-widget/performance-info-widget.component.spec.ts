import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceInfoWidgetComponent } from './performance-info-widget.component';

describe('PerformanceInfoWidgetComponent', () => {
  let component: PerformanceInfoWidgetComponent;
  let fixture: ComponentFixture<PerformanceInfoWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceInfoWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceInfoWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
