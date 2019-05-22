import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Report} from '../../shared/models/api/report.interface';

@Injectable({
	providedIn: 'root'
})
export class PerformanceInfoService {

	private onReportDataChangeSource = new Subject<any>();

	onReportDataChange = this.onReportDataChangeSource.asObservable();

	setReportData(report: Report) {
		this.onReportDataChangeSource.next(report);
	}
}
