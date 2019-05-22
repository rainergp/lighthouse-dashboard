import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {servicesConfig} from '../../../environments/environment';
import {Report} from '../../shared/models/server/report.interface';

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
