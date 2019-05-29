import {Component, OnInit} from '@angular/core';
import {PerformanceInfoService} from '../../services/performance-info.service';
import {Subscription} from 'rxjs';
import * as d3Shape from 'd3-shape';

@Component({
	selector: 'app-line-chart',
	templateUrl: './line-chart.component.html',
	styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

	private onReportDataChangeSubscription: Subscription;

	public data: any;
	public chartView: any[];
	public colorScheme: object;
	public curve: any;

	constructor(private performanceInfoService: PerformanceInfoService,
	) {

		this.curve = d3Shape.curveStep;

		this.data = [];
		// [
		// {
		// 	name: 'Performance',
		// 	series: [
		// 		{
		// 			name: new Date('2019-05-20T12:00:00'),
		// 			value: 0.98 * 100
		// 		},
		// 		{
		// 			name: new Date('2019-05-20T24:00:00'),
		// 			value: 0.91 * 100
		// 		},
		// 		{
		// 			name: new Date('2019-05-21T06:00:00'),
		// 			value: 0.93 * 100
		// 		},
		// 		{
		// 			name: new Date('2019-05-21T12:00:00'),
		// 			value: 1.0 * 100
		// 		},
		// 		{
		// 			name: new Date('2019-05-21T18:00:00'),
		// 			value: 0.98 * 100
		// 		},
		// 		{
		// 			name: new Date('2019-05-21T24:00:00'),
		// 			value: 0.94 * 100
		// 		},
		// 		{
		// 			name: new Date('2019-05-23T12:00:00'),
		// 			value: 0.93 * 100
		// 		},
		// 		{
		// 			name: new Date('2019-05-23T24:00:00'),
		// 			value: 0.88 * 100
		// 		},
		// 		{
		// 			name: new Date('2019-05-24T12:00:00'),
		// 			value: 0.2 * 100
		// 		},
		// 		{
		// 			name: new Date('2019-05-24T24:00:00'),
		// 			value: 0.5 * 100
		// 		}
		// 	]
		// }
		// ];

		this.colorScheme = {
			domain: ['#C80205', '#F56306', '#f6f804', '#43d204']
		};

	}

	ngOnInit() {
		this.onReportDataChangeSubscription = this.performanceInfoService.onReportDataChange.subscribe(data => {

			console.log(data);

			this.data = data;
		});
	}

}
