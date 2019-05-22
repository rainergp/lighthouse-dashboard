import {Component, Injector, OnInit} from '@angular/core';
import {HttpErrorHandler} from '../../../shared/helpers/http-error-handler';
import {ReportService} from '../../../shared/services/api/report.service';
import {Report} from '../../../shared/models/api/report.interface';
import {PerformanceInfoService} from '../../services/performance-info.service';

@Component({
	selector: 'app-performance-info-widget',
	templateUrl: './performance-info-widget.component.html',
	styleUrls: ['./performance-info-widget.component.sass']
})
export class PerformanceInfoWidgetComponent extends HttpErrorHandler implements OnInit {

	constructor(
		private reportService: ReportService,
		private performanceInfoService: PerformanceInfoService,
		injector: Injector
	) {
		super(injector);
	}

	ngOnInit() {
		super.ngOnInit();
		this.fetchReport();
	}

	fetchReport() {
		this.reportService.getReport().subscribe(data => {
			this.performanceInfoService.setReportData(data);
		});
	}
}
