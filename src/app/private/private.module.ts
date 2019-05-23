// Modules
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {PrivateRoutingModule} from './private-routing.module';

// Containers
import {PerformancePageComponent} from './containers/performance-page/performance-page.component';
import {DashboardPageComponent} from './containers/dashboard-page/dashboard-page.component';

// Components
import {LineChartComponent} from './components/line-chart/line-chart.component';
import {PerformanceInfoWidgetComponent} from './components/performance-info-widget/performance-info-widget.component';

@NgModule({
	declarations: [
		PerformancePageComponent,
		DashboardPageComponent,
		LineChartComponent,
		PerformanceInfoWidgetComponent,
	],
	imports: [
		CommonModule,
		SharedModule,
		PrivateRoutingModule,
	],
	providers: [],
	exports: [
		LineChartComponent
	],
})
export class PrivateModule {
}
