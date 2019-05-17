import {Component} from '@angular/core';
import {NbSidebarService} from '@nebular/theme';
import {MessageService} from 'primeng/api';
import {SwPush} from '@angular/service-worker';
import {PushNotificationService} from './shared/services/push-notification.service';

const VAPID_PUBLIC = 'BGDeKADIS53M3x3TlnTiNvSVu8xLhsDf3i5fQkIkt7IkXr45PNjXsWxLaP0tBzGbtgf4IQl6zMilBC8dh6edIck';
const VAPID_PRIVATE = 'njg4VnulinBcFlBwDuvXSpjCXYXVNYO9y2zsr5Zxp-g';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {

	public data: any;

	constructor(private sidebarService: NbSidebarService, private swPush: SwPush, private pushNotificationService: PushNotificationService) {

		if (swPush.isEnabled) {
			swPush
				.requestSubscription({
					serverPublicKey: VAPID_PUBLIC,
				})
				.then(subscription => {
					pushNotificationService.sendSubscriptionToTheServer(subscription).subscribe();
				})
				.catch(console.error);
		}

		this.data = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [
				{
					label: 'First Dataset',
					data: [65, 59, 80, 81, 56, 55, 40],
					fill: false,
					borderColor: '#4bc0c0'
				},
				{
					label: 'Second Dataset',
					data: [28, 48, 40, 19, 86, 27, 90],
					fill: false,
					borderColor: '#565656'
				}
			]
		};
	}

	toggle() {
		this.sidebarService.toggle(true);
		return false;
	}
}
