import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediansInfoWidgetComponent } from './medians-info-widget.component';

describe('MediansInfoWidgetComponent', () => {
	let component: MediansInfoWidgetComponent;
	let fixture: ComponentFixture<MediansInfoWidgetComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ MediansInfoWidgetComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MediansInfoWidgetComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
