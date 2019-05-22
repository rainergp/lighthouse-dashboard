// Modules
import {SharedModule} from './shared/shared.module';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {ServiceWorkerModule} from '@angular/service-worker';

// Components
import {AppComponent} from './app.component';

// Configuration
import {environment} from '../environments/environment';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		SharedModule,
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
	],
	providers: [],
	exports: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
