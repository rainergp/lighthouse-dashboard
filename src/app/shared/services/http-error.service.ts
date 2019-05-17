import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class HttpErrorService {

	private onHttpErrorResponseSource = new Subject<any>();

	onHttpErrorResponse = this.onHttpErrorResponseSource.asObservable();

	setHttpErrorMessage(error: object) {
		this.onHttpErrorResponseSource.next(error);
	}
}
