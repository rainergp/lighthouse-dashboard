import {MetricValueType} from './enums/metric-value-type.enum';

export interface Metric {
	title: string;
	valueType: MetricValueType;
	latestValue: number;
	medianValue: number;
}
