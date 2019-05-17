import {Injectable} from '@angular/core';
import {
	HttpInterceptor,
	HttpRequest,
	HttpErrorResponse,
	HttpHandler,
	HttpEvent
} from '@angular/common/http';
import {_throw} from 'rxjs-compat/observable/throw';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import {HttpErrorService} from '../services/http-error.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

	constructor(
		public httpErrorService: HttpErrorService,
	){}

	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {

		return next.handle(request)
			.catch((err: HttpErrorResponse) => {

				if (err.error instanceof Error) {
					this.httpErrorService.setHttpErrorMessage({type: 'internal', error: err.error});
				} else {
					this.httpErrorService.setHttpErrorMessage({type: 'backend', error: err});
				}

				return _throw(err);
			});
	}
}
