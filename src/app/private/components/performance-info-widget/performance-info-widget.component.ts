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
	public medianPerformance: number;
	public medianMetrics: any;

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
			this.performanceInfoService.setChartData(this.parseDataForChart(report));
		});
	}

	private parseDataForChart(report): ChartData[] {

		const series: ChartDataSerie[] = [];
		const data = {};

		let count = 0;
		let performanceSum = 0;
		let firstContentfulPaintSum = 0;
		let firstMeaningfulPaintSum = 0;
		let speedIndexSum = 0;
		let firstCPUIdleSum = 0;
		let interactiveSum = 0;
		let estimatedInputLatencySum = 0;
		let maxPotentialFIDSum = 0;

		report.data.forEach((item, idx) => {

			if (idx < 48) {
				count++;
				performanceSum += item.scores.performance * 100;
				firstContentfulPaintSum += item.metrics.firstContentfulPaint.numericValue;
				firstMeaningfulPaintSum += item.metrics.firstMeaningfulPaint.numericValue;
				speedIndexSum += item.metrics.speedIndex.numericValue;
				firstCPUIdleSum += item.metrics.firstCPUIdle.numericValue;
				interactiveSum += item.metrics.interactive.numericValue;
				estimatedInputLatencySum += item.metrics.estimatedInputLatency.numericValue;
				maxPotentialFIDSum += item.metrics.maxPotentialFID.numericValue;
			}

			series[idx] = {
				name: new Date(item.fetchTime),
				value: item.scores.performance * 100,
				data: {
					metrics: item.metrics,
					_id: item._id
				}

			};
		});

		this.medianPerformance = Math.round(performanceSum / count);

		this.medianMetrics = {
			firstContentfulPaint: (firstContentfulPaintSum / count / 1000).toFixed(1),
			firstMeaningfulPaint: (firstMeaningfulPaintSum / count / 1000).toFixed(1),
			speedIndex: (speedIndexSum / count / 1000).toFixed(1),
			firstCPUIdle: (firstCPUIdleSum / count / 1000).toFixed(1),
			interactive: (interactiveSum / count / 1000).toFixed(1),
			estimatedInputLatency: Math.round(estimatedInputLatencySum / count),
			maxPotentialFID: Math.round(maxPotentialFIDSum / count)
		};

		return [{
			name: 'Performance',
			series
		}];
	}
}
