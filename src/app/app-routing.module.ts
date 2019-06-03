import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'dashboard/performance',
		pathMatch: 'full'
	},
	{
		path: 'dashboard',
		loadChildren: './private/private.module#PrivateModule',
		// canActivate: [AuthGuard]
	},
	{
		path: 'auth',
		loadChildren: './public/public.module#PublicModule'
	},
	// {
	// 	path: 'guide',
	// 	loadChildren: './style-guide/style-guide.module#StyleGuideModule'
	// }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
