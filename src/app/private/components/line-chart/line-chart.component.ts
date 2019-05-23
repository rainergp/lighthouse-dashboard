import {Component, OnInit} from '@angular/core';
import {PerformanceInfoService} from '../../services/performance-info.service';
import {Subscription} from 'rxjs';
import * as d3Shape from 'd3-shape';

@Component({
	selector: 'app-line-chart',
	templateUrl: './line-chart.component.html',
	styleUrls: ['./line-chart.component.sass']
})
export class LineChartComponent implements OnInit {

	private onReportDataChangeSubscription: Subscription;

	public data: any;
	public chartView: any[];
	public colorScheme: object;
	public curve: any;

	constructor(private performanceInfoService: PerformanceInfoService,
	) {

		// this.chartView = [700, 400];

		this.curve = d3Shape.curveStep;

		this.data = [
			{
				name: 'Performance',
				series: [
					{
						name: new Date('2019-05-20T12:00:00'),
						value: 0.98 * 100
					},
					{
						name: new Date('2019-05-20T24:00:00'),
						value: 0.91 * 100
					},
					{
						name: new Date('2019-05-21T06:00:00'),
						value: 0.93 * 100
					},
					{
						name: new Date('2019-05-21T12:00:00'),
						value: 1.0 * 100
					},
					{
						name: new Date('2019-05-21T18:00:00'),
						value: 0.98 * 100
					},
					{
						name: new Date('2019-05-21T24:00:00'),
						value: 0.94 * 100
					},
					{
						name: new Date('2019-05-23T12:00:00'),
						value: 0.93 * 100
					},
					{
						name: new Date('2019-05-23T24:00:00'),
						value: 0.88 * 100
					},
					{
						name: new Date('2019-05-24T12:00:00'),
						value: 0.2 * 100
					},
					{
						name: new Date('2019-05-24T24:00:00'),
						value: 0.5 * 100
					}
				]
			}
		];

		this.colorScheme = {
			// domain: ['#43d204', '#f6f804', '#F56306', '#C80205']
			domain: ['#C80205', '#F56306', '#f6f804', '#43d204']
		};


		// this.data = {
		// 	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		// 	datasets: [
		// 		{
		// 			label: 'First Dataset',
		// 			data: [65, 59, 80, 81, 56, 55, 40],
		// 			fill: false,
		// 			borderColor: '#4bc0c0'
		// 		},
		// 		{
		// 			label: 'Second Dataset',
		// 			data: [28, 48, 40, 19, 86, 27, 90],
		// 			fill: false,
		// 			borderColor: '#565656'
		// 		}
		// 	]
		// };
	}

	ngOnInit() {
		this.onReportDataChangeSubscription = this.performanceInfoService.onReportDataChange.subscribe(data => {
			console.log(data);
		});
	}

}
