import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


/*
Memo for how this routing thing works.
If we have no route in url bar we will redirect to tabs. Path tabs is a module which has it own routing that handles the pages inside it.

examples
:8100/ = everything after handled by this file except the example route below because it gets overrides?
:8100/tabs/ = everything after handled by tabs module at tabs-routing-modules.ts
*/

const routes: Routes = [
	{
		path: '',
		redirectTo: 'tabs',
		pathMatch: 'full'
	},
	{
		path: 'tabs',
		loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
	}

	/*
	//Dissabled these cause they are not neede yet.

	{
		path: 'folder/:id',
		loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
	},
	{
		path: 'mail',
		loadChildren: () => import('./pages/mail/mail.module').then( m => m.MailPageModule)
	},
	{
		path: 'meet',
		loadChildren: () => import('./pages/meet/meet.module').then( m => m.MeetPageModule)
	},
	{
		path: 'account',
		loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule)
	},
	{
		path: 'details',
		loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule)
	}
	*/
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
