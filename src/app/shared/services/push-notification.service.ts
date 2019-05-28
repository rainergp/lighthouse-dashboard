import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

const SERVER_URL = 'http://localhost:3000/api/subscription';

@Injectable()
export class PushNotificationService {

	private onUpdatedDataNotificationSource = new Subject<any>();

	onUpdatedDataNotification = this.onUpdatedDataNotificationSource.asObservable();

	constructor(private http: HttpClient) {
	}

	public sendSubscriptionToTheServer(subscription: PushSubscription) {
		return this.http.post(SERVER_URL, subscription);
	}

	public fetchUpdatedData() {
		try {
			this.onUpdatedDataNotificationSource.next();
		} catch (e) {
			console.log(e);
		}
	}
}
