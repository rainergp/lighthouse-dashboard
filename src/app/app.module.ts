import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbActionsModule, NbSidebarModule, NbSidebarService} from '@nebular/theme';
import {ChartModule} from 'primeng/chart';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		NbThemeModule.forRoot({name: 'corporate'}),
		NbLayoutModule,
		NbActionsModule,
		NbSidebarModule,
		ChartModule,
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
	],
	providers: [
		NbSidebarService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
