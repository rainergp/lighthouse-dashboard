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

	private polarToCartesian(centerX, centerY, radius, angleInDegrees) {
		const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

		return {
			x: centerX + (radius * Math.cos(angleInRadians)),
			y: centerY + (radius * Math.sin(angleInRadians))
		};
	}

	public describeArc(x, y, radius, startAngle, endAngle) {

		const start = this.polarToCartesian(x, y, radius, endAngle);
		const end = this.polarToCartesian(x, y, radius, startAngle);

		const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

		// return 'M52 102 a 50 50 0 0 1 0 -100';
		return `M${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
	}

}
