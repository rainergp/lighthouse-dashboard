import {Component, OnInit} from '@angular/core';
import {PerformanceInfoService} from '../../services/performance-info.service';
import {Subscription} from 'rxjs';
import * as d3Shape from 'd3-shape';

@Component({
	selector: 'app-metric-chart',
	templateUrl: './metric-chart.component.html',
	styleUrls: ['./metric-chart.component.sass']
})
export class MetricChartComponent implements OnInit {

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
				name: 'Cyan',
				series: [
					{
						name: 1,
						value: 2650
					},
					{
						name: 2,
						value: 2800
					},
					{
						name: 3,
						value: 2000
					},
					{
						name: 4,
						value: 2500
					},
					{
						name: 6,
						value: 3100
					},
					{
						name: 7,
						value: 2350
					}
				]
			}
		];

		this.colorScheme = {
			domain: ['#C80205', '#F63206', '#F56306', '#f6f804', '#63C707', '#39b304']
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
