import {MetricValues} from './metric-values';

export interface Metrics {
	firstContentfulPaint: MetricValues;
	firstMeaningfulPaint: MetricValues;
	speedIndex: MetricValues;
	firstCPUIdle: MetricValues;
	interactive: MetricValues;
	estimatedInputLatency: MetricValues;
	maxPotentialFID: MetricValues;
}
