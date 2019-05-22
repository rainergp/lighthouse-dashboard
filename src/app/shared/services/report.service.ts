import {Injectable} from '@angular/core';
import {servicesConfig} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Report} from '../models/server/report.interface';

@Injectable({
	providedIn: 'root'
})
export class ReportService {

	private endpoints = servicesConfig.api.endpoints.report;

	constructor(private http: HttpClient) {
	}

	getReport(): Observable<Report> {
		return this.http.get<Report>(this.endpoints.getReportUrl);
	}
}
