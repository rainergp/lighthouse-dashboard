import {Component, Input, OnInit} from '@angular/core';
import * as d3Shape from 'd3-shape';
import {environment} from '../../../../environments/environment';

@Component({
	selector: 'app-line-chart',
	templateUrl: './line-chart.component.html',
	styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

	get data(): any {
		return this._data;
	}

	@Input() set data(value: any) {
		this._data = value;
	}


	// tslint:disable-next-line:variable-name
	private _data: any;
	public colorScheme: object;
	public curve: any;

	constructor() {

		this.curve = d3Shape.curveStep;

		this.data = [];

		this.colorScheme = {
			domain: ['#C80205', '#F56306', '#f6f804', '#43d204']
		};

	}

	ngOnInit() {}

	onSelect(e: any) {
		// TODO: This is a hack to be able to get the index when a circle is clicked on the chart.
		// TODO: It can potentially break if the library gets updated
		if (e.target.tagName === 'circle') {
			const idx = this.data[0].series.length - 1 - e.target.attributes.class.value.replace(/[^\/\d]/g, '');

			console.log(idx);

			const id = this.data[0].series[idx].data._id;
			const url = environment.filesHostUrl + id + '.html';
			window.open(url, '_blank');
		}
	}
}
