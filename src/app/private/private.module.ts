// Modules
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {PrivateRoutingModule} from './private-routing.module';

// Containers
import {PerformancePageComponent} from './containers/performance-page/performance-page.component';
import {DashboardPageComponent} from './containers/dashboard-page/dashboard-page.component';

// Components
import {MetricChartComponent} from './components/metric-chart/metric-chart.component';


@NgModule({
	declarations: [
		PerformancePageComponent,
		DashboardPageComponent,
		MetricChartComponent,
	],
	imports: [
		CommonModule,
		SharedModule,
		PrivateRoutingModule,
	],
	exports: [
		MetricChartComponent
	],
})
export class PrivateModule {
}
