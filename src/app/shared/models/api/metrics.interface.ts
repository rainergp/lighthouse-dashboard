import {MetricValues} from './metric-values.interface';

export interface Metrics {
	firstContentfulPaint: MetricValues;
	firstMeaningfulPaint: MetricValues;
	speedIndex: MetricValues;
	firstCPUIdle: MetricValues;
	interactive: MetricValues;
	estimatedInputLatency: MetricValues;
	maxPotentialFID: MetricValues;
}
