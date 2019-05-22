import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	// {
	// 	path: 'login',
	// 	component: LoginPageComponent
	// },
	// {
	// 	path: 'forgot-password',
	// 	component: ForgotPasswordPageComponent
	// },
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	],
	declarations: [],
	exports: [RouterModule]
})
export class PublicRoutingModule { }
