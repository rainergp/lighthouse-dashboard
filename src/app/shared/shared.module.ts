// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import {
	NbThemeModule,
	NbMenuModule,
	NbCardModule,
	NbChatModule,
	NbInputModule,
	NbButtonModule,
	NbLayoutModule,
	NbSidebarModule,
	NbSidebarService,
	NbDialogModule,
	NbSelectModule,
	NbAlertModule,
	NbSpinnerModule,
	NbListModule,
	NbUserModule,
	NbContextMenuModule,
	NbActionsModule,
} from '@nebular/theme';

import {ChartModule} from 'primeng/chart';

// Helpers
import {HttpErrorHandler} from './helpers/http-error-handler';

// Interceptors
import {httpInterceptorProviders} from './interceptors';

// Services
import {PushNotificationService} from './services/push-notification.service';

// Components
import { PageNotFoundComponent } from './containers';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
		NbThemeModule.forRoot({name: 'corporate'}),
		NbChatModule.forRoot(),
		NbMenuModule.forRoot(),
		NbSidebarModule.forRoot(),
		NbDialogModule.forRoot(),
		NbLayoutModule,
		NbCardModule,
		NbInputModule,
		NbButtonModule,
		NbSelectModule,
		NbAlertModule,
		NbSpinnerModule,
		NbListModule,
		NbUserModule,
		NbContextMenuModule,
		NbActionsModule,
		ChartModule,
		NgxChartsModule,
	],
	declarations: [
		PageNotFoundComponent,
		HttpErrorHandler,
	],
	providers: [
		PushNotificationService,
		NbSidebarService,
		httpInterceptorProviders,
	],
	exports: [
		PageNotFoundComponent,
		CommonModule,
		RouterModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		NbThemeModule,
		NbChatModule,
		NbMenuModule,
		NbSidebarModule,
		NbLayoutModule,
		NbCardModule,
		NbInputModule,
		NbButtonModule,
		NbDialogModule,
		NbSelectModule,
		NbAlertModule,
		NbSpinnerModule,
		NbListModule,
		NbUserModule,
		NbContextMenuModule,
		NbActionsModule,
		ChartModule,
		NgxChartsModule,
	]
})

export class SharedModule {
}
