import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {ChartData} from '../models/chart-data.interface';

@Injectable({
	providedIn: 'root'
})
export class PerformanceInfoService {

	private onReportDataChangeSource = new Subject<any>();

	onReportDataChange = this.onReportDataChangeSource.asObservable();

	public setChartData(data: ChartData[]) {
		this.onReportDataChangeSource.next(data);
	}
}
