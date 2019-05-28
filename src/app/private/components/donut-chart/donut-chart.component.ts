import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ChartColorsType} from '../../models/enums/chart-colors-type.enum';

@Component({
	selector: 'app-donut-chart',
	templateUrl: './donut-chart.component.html',
	styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {

	public color: string;

	// tslint:disable-next-line:variable-name
	private _percentage: number;

	get percentage(): number {
		return this._percentage;
	}

	@Input()
	set percentage(value: number) {

		if (value < 50) {
			this.color = ChartColorsType.Red;
		} else if (value > 89) {
			this.color = ChartColorsType.Green;
		} else {
			this.color = ChartColorsType.Orange;
		}

		this._percentage = value;
	}

	constructor() {
	}

	ngOnInit() {
	}

}
