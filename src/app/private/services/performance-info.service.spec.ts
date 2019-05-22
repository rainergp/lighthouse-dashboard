import { TestBed } from '@angular/core/testing';

import { PerformanceInfoService } from './performance-info.service';

describe('PerformanceInfoService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: PerformanceInfoService = TestBed.get(PerformanceInfoService);
		expect(service).toBeTruthy();
	});
});
