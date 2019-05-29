import {Component, Injector, OnInit} from '@angular/core';
import {HttpErrorHandler} from '../../../shared/helpers/http-error-handler';
import {ReportService} from '../../../shared/services/api/report.service';
import {PerformanceInfoService} from '../../services/performance-info.service';
import {ChartData} from '../../models/chart-data.interface';
import {ChartDataSerie} from '../../models/chart-data-serie.interface';
import {PushNotificationService} from '../../../shared/services/push-notification.service';
import {Subscription} from 'rxjs';
import {Report} from '../../../shared/models/api/report.interface';

@Component({
	selector: 'app-performance-info-widget',
	templateUrl: './performance-info-widget.component.html',
	styleUrls: ['./performance-info-widget.component.scss']
})
export class PerformanceInfoWidgetComponent extends HttpErrorHandler implements OnInit {

	private onUpdatedDataNotificationSubscription: Subscription;

	public report: Report;

	constructor(
		private reportService: ReportService,
		private performanceInfoService: PerformanceInfoService,
		private pushNotificationService: PushNotificationService,
		injector: Injector
	) {
		super(injector);
	}

	ngOnInit() {
		super.ngOnInit();

		this.fetchReport();
		this.onUpdatedDataNotificationSubscription = this.pushNotificationService.onUpdatedDataNotification.subscribe(() => {
			this.fetchReport();
		});
	}

	fetchReport() {
		this.reportService.getReport().subscribe((report: any) => {
			this.report = report.data[0];
			console.log(this.report);
			this.performanceInfoService.setChartData(this.parseDataForChart(report));
		});
	}

	private parseDataForChart(report): ChartData[] {

		const series: ChartDataSerie[] = [];

		report.data.forEach((item, idx) => {
			series[idx] = {
				name: new Date(item.fetchTime),
				value: item.scores.performance * 100
			};
		});

		return [{
			name: 'Performance',
			series
		}];
	}
}
