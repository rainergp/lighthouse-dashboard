import {Scores} from './scores.interface';
import {Metrics} from './metrics.interface';
import {DeviceType} from '../enums/device-type.enum';

export interface Report {
	metrics: Metrics;
	scores: Scores;
	_id: string;
	deviceType: DeviceType;
	requestedUrl: string;
	fetchTime: Date;
}




