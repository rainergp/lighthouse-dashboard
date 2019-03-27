import {Component} from '@angular/core';
import {NbSidebarService} from '@nebular/theme';
import {MessageService} from 'primeng/api';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {

	public data: any;

	constructor(private sidebarService: NbSidebarService) {
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
