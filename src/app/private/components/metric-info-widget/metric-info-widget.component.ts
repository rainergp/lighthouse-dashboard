import {Component, Input, OnInit} from '@angular/core';
import {Metric} from '../../models/metric.interface';
import {MetricValueType} from '../../models/enums/metric-value-type.enum';

@Component({
	selector: 'app-metric-info-widget',
	templateUrl: './metric-info-widget.component.html',
	styleUrls: ['./metric-info-widget.component.scss']
})
export class MetricInfoWidgetComponent implements OnInit {

	@Input() public title = '';
	@Input() public valueType = MetricValueType.Percentage;
	@Input() public latestValue = '';
	@Input() public medianValue = '';

	constructor() { }

	ngOnInit() {
	}

}
