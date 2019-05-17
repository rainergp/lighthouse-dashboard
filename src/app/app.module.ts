import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';

// Configuration
import {environment} from '../environments/environment';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		SharedModule,
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
