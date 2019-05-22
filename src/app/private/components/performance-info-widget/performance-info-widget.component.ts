import {Component, Injector, OnInit} from '@angular/core';
import {HttpErrorHandler} from '../../../shared/helpers/http-error-handler';
import {ReportService} from '../../services/report.service';
import {Report} from '../../../shared/models/server/report.interface';

@Component({
	selector: 'app-performance-info-widget',
	templateUrl: './performance-info-widget.component.html',
	styleUrls: ['./performance-info-widget.component.sass']
})
export class PerformanceInfoWidgetComponent extends HttpErrorHandler implements OnInit {

	public report: Report;

	constructor(
		private reportService: ReportService,
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
			this.report = data;
			console.log(this.report);
		});
	}
}
