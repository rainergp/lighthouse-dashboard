import {Component, OnInit} from '@angular/core';
import {SwPush, SwUpdate} from '@angular/service-worker';
import {PushNotificationService} from './shared/services/push-notification.service';

const VAPID_PUBLIC = 'BGDeKADIS53M3x3TlnTiNvSVu8xLhsDf3i5fQkIkt7IkXr45PNjXsWxLaP0tBzGbtgf4IQl6zMilBC8dh6edIck';
const VAPID_PRIVATE = 'njg4VnulinBcFlBwDuvXSpjCXYXVNYO9y2zsr5Zxp-g';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent /*implements OnInit */{


	// tslint:disable-next-line:max-line-length
	constructor(private swUpdate: SwUpdate, private swPush: SwPush, private pushNotificationService: PushNotificationService) {

		if (swPush.isEnabled) {
			swPush
				.requestSubscription({
					serverPublicKey: VAPID_PUBLIC,
				})
				.then(subscription => {
					pushNotificationService.sendSubscriptionToTheServer(subscription).subscribe();
				})
				.catch(console.error);

			swPush.messages
				.subscribe(message => {
					console.log('[App] Push message received', message);
				});
		}
	}

	// public ngOnInit(): void {
	// 	if (this.swUpdate.isEnabled) {
	// 		this.swUpdate.available.subscribe((evt) => {
	// 			console.log('service worker updated');
	// 		});
	// 		this.swUpdate.checkForUpdate().then(() => {
	// 			// noop
	// 		}).catch((err) => {
	// 			console.error('error when checking for update', err);
	// 		});
	// 	}
	// }

}
