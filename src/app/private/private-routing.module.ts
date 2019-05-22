import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardPageComponent} from './containers/dashboard-page/dashboard-page.component';
import {PerformancePageComponent} from './containers/performance-page/performance-page.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full'
	},
	{
		path: '',
		component: DashboardPageComponent,
		children: [
			{
				path: 'performance',
				component: PerformancePageComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PrivateRoutingModule { }
