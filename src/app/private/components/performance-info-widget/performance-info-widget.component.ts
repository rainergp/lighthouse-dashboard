import {Component, Injector, Input, OnInit} from '@angular/core';
import {ChartData} from '../../models/chart-data.interface';
import {ChartDataSerie} from '../../models/chart-data-serie.interface';
import {Report} from '../../../shared/models/api/report.interface';
import {DeviceType} from '../../../shared/models/enums/device-type.enum';

@Component({
	selector: 'app-performance-info-widget',
	templateUrl: './performance-info-widget.component.html',
	styleUrls: ['./performance-info-widget.component.scss']
})
export class PerformanceInfoWidgetComponent implements OnInit {
	get deviceType(): DeviceType {
		return this._deviceType;
	}

	@Input() set deviceType(value: DeviceType) {
		this._deviceType = value;

		this.title = `${this.deviceType === DeviceType.Desktop ? 'DESKTOP' : 'MOBILE'} / Celebrity Cruises`;
	}

	get data(): any {
		return this._data;
	}

	@Input() set data(value: any) {
		this._data = value;

		if (value && value.length > 0) {
			this.setReport(value);
		}
	}

	// tslint:disable-next-line:variable-name
	private _deviceType: DeviceType;
	// tslint:disable-next-line:variable-name
	private _data: any;

	public chartData: ChartData[];
	public title: string;
	public report: Report;
	public medianPerformance: number;
	public medianMetrics: any;

	constructor() {
	}

	ngOnInit() {
	}

	setReport(data) {
		const filteredData = data.filter(item => item.deviceType === this.deviceType);

		if (filteredData && filteredData.length > 0) {
			this.report = filteredData[0];

			this.chartData = this.parseDataForChart(filteredData);
		}
	}

	private parseDataForChart(dataList): ChartData[] {

		const series: ChartDataSerie[] = [];
		const data = {};

		let counter = 0;

		const performanceArr = [];
		const firstContentfulPaintArr = [];
		const firstMeaningfulPaintArr = [];
		const speedIndexArr = [];
		const firstCPUIdleArr = [];
		const interactiveArr = [];
		const estimatedInputLatencyArr = [];
		const maxPotentialFIDArr = [];

		dataList.forEach((item, index) => {

			if (index < 96) {
				performanceArr.push(item.scores.performance);
				firstContentfulPaintArr.push(item.metrics.firstContentfulPaint.numericValue);
				firstMeaningfulPaintArr.push(item.metrics.firstMeaningfulPaint.numericValue);
				speedIndexArr.push(item.metrics.speedIndex.numericValue);
				firstCPUIdleArr.push(item.metrics.firstCPUIdle.numericValue);
				interactiveArr.push(item.metrics.interactive.numericValue);
				estimatedInputLatencyArr.push(item.metrics.estimatedInputLatency.numericValue);
				maxPotentialFIDArr.push(item.metrics.maxPotentialFID.numericValue);
				counter++;
			}

			series[index] = {
				name: new Date(item.fetchTime),
				value: item.scores.performance * 100,
				// min: 0,
				// max: 100,
				data: {
					metrics: item.metrics,
					_id: item._id
				}

			};
		});

		const idx = counter / 2;

		this.medianPerformance = Math.round(performanceArr.sort((n1, n2) => n1 - n2)[idx] * 100);

		this.medianMetrics = {
			firstContentfulPaint: (firstContentfulPaintArr.sort((n1, n2) => n1 - n2)[idx] / 1000).toFixed(1),
			firstMeaningfulPaint: (firstMeaningfulPaintArr.sort((n1, n2) => n1 - n2)[idx] / 1000).toFixed(1),
			speedIndex: (speedIndexArr.sort((n1, n2) => n1 - n2)[idx] / 1000).toFixed(1),
			firstCPUIdle: (firstCPUIdleArr.sort((n1, n2) => n1 - n2)[idx] / 1000).toFixed(1),
			interactive: (interactiveArr.sort((n1, n2) => n1 - n2)[idx] / 1000).toFixed(1),
			estimatedInputLatency: Math.round(estimatedInputLatencyArr.sort((n1, n2) => n1 - n2)[idx]),
			maxPotentialFID: Math.round(maxPotentialFIDArr.sort((n1, n2) => n1 - n2)[idx])
		};

		console.log(data);

		return [{
			name: 'Performance',
			series
		}];
	}
}
