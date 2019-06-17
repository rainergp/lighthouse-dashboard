import {Component, Injector, OnInit} from '@angular/core';
import {DeviceType} from '../../../shared/models/enums/device-type.enum';
import {HttpErrorHandler} from '../../../shared/helpers/http-error-handler';
import {ReportService} from '../../../shared/services/api/report.service';
import {PerformanceInfoService} from '../../services/performance-info.service';
import {PushNotificationService} from '../../../shared/services/push-notification.service';
import {Subscription} from 'rxjs';

@Component({
	selector: 'app-performance-page',
	templateUrl: './performance-page.component.html',
	styleUrls: ['./performance-page.component.scss']
})
export class PerformancePageComponent extends HttpErrorHandler implements OnInit {

	private onUpdatedDataNotificationSubscription: Subscription;

	public data: any;

	get deviceType() {
		return DeviceType;
	}

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

			this.data = report.data;
		});
	}
}
