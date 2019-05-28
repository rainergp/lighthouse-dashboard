import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricInfoWidgetComponent } from './metric-info-widget.component';

describe('MetricInfoWidgetComponent', () => {
	let component: MetricInfoWidgetComponent;
	let fixture: ComponentFixture<MetricInfoWidgetComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ MetricInfoWidgetComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MetricInfoWidgetComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
