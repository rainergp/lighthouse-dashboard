import {Component, Injector, OnDestroy, OnInit} from '@angular/core';
import {AutoUnsubscribe} from 'ngx-auto-unsubscribe';
import {Subscription} from 'rxjs';
import {HttpErrorService} from '../services/http-error.service';
import {HttpErrorHandlerInterface} from './http-error-handler-interface';

@AutoUnsubscribe()
@Component({
	template: ''
})
// tslint:disable-next-line:component-class-suffix
export class HttpErrorHandler implements OnInit, OnDestroy, HttpErrorHandlerInterface {

	protected httpErrorService: HttpErrorService;
	public errorMessage = '';
	public loading = false;
	private onHttpErrorResponseSubscription: Subscription;

	constructor(injector: Injector) {
		this.httpErrorService = injector.get(HttpErrorService);
	}

	ngOnInit(): void {
		this.onHttpErrorResponseSubscription = this.httpErrorService.onHttpErrorResponse.subscribe(error => {

			this.loading = false;

			console.log(error);

			if (error.type === 'internal') {
				this.setErrorMsg(`An error occurred: ${error.error.message}`);
			} else {
				console.log(error.error.status);
				console.log(error.error);

				this.setErrorMsg(`Backend returned code ${error.error.status}. Message: ${error.error.message}`);
			}
		});
	}

	ngOnDestroy(): void {}

	setErrorMsg(msg: string): void {
		this.errorMessage = msg;
	}

	onErrorClose(): void {
		this.setErrorMsg('');
	}
}
