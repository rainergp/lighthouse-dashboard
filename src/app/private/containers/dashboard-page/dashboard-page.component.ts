import {Component, OnInit} from '@angular/core';
import {NbSidebarService} from '@nebular/theme';

@Component({
	selector: 'app-dashboard-page',
	templateUrl: './dashboard-page.component.html',
	styleUrls: ['./dashboard-page.component.sass']
})
export class DashboardPageComponent implements OnInit {

	constructor(private sidebarService: NbSidebarService) {
	}

	ngOnInit() {
	}

	toggle() {
		this.sidebarService.toggle(true);
		return false;
	}

}
