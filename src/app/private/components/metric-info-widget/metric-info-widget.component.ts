import {Component, Input, OnInit} from '@angular/core';
import {MetricValueType} from '../../models/enums/metric-value-type.enum';
import * as eva from 'eva-icons';

@Component({
	selector: 'app-metric-info-widget',
	templateUrl: './metric-info-widget.component.html',
	styleUrls: ['./metric-info-widget.component.scss']
})
export class MetricInfoWidgetComponent implements OnInit {

	@Input() public title = '';
	@Input() public description = null;
	@Input() public referenceLink = '';
	@Input() public valueType = MetricValueType.Percentage;
	@Input() public latestValue = '';
	@Input() public medianValue = '';

	constructor() { }

	ngOnInit() {
	}

}
