import {Metrics} from '../../shared/models/api/metrics.interface';

export interface ChartDataSerie {
	name: Date;
	value: number;
	min?: number;
	max?: number;
	data: object;
}
