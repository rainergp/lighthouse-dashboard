import {Component, OnInit} from '@angular/core';
import {NbSidebarService} from '@nebular/theme';
import {SwPush, SwUpdate} from '@angular/service-worker';
import {PushNotificationService} from '../../../shared/services/push-notification.service';

const VAPID_PUBLIC = 'BGDeKADIS53M3x3TlnTiNvSVu8xLhsDf3i5fQkIkt7IkXr45PNjXsWxLaP0tBzGbtgf4IQl6zMilBC8dh6edIck';
const VAPID_PRIVATE = 'njg4VnulinBcFlBwDuvXSpjCXYXVNYO9y2zsr5Zxp-g';

@Component({
	selector: 'app-dashboard-page',
	templateUrl: './dashboard-page.component.html',
	styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

	constructor(
		private sidebarService: NbSidebarService,
		private swUpdate: SwUpdate,
		private swPush: SwPush,
		private pushNotificationService: PushNotificationService
	) {
	}

	public ngOnInit(): void {

		// TODO: Move this logic to a service
		if (this.swUpdate.isEnabled) {
			this.swPush
				.requestSubscription({
					serverPublicKey: VAPID_PUBLIC,
				})
				.then(subscription => {
					this.pushNotificationService.sendSubscriptionToTheServer(subscription).subscribe();
				})
				.catch(console.error);

			this.swPush.messages
				.subscribe(() => {
					this.pushNotificationService.fetchUpdatedData();
				});

			this.swUpdate.available
				.subscribe((evt) => {
					console.log('service worker updated');
				});

			this.swUpdate.checkForUpdate().then(() => {
				// noop
			}).catch((err) => {
				console.error('error when checking for update', err);
			});
		}
	}

	toggle() {
		this.sidebarService.toggle(true);
		return false;
	}

}
