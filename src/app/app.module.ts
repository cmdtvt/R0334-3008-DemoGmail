import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';



/*
To import and use it do the import above and after that add it into
@NgModule imports.

Then you need to reimport the wanted module in the file you wish to use it.
so use this: import { HttpClientModule } from '@angular/common/http';
*/

@NgModule({
	declarations: [AppComponent],
	entryComponents: [],
	providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
	bootstrap: [AppComponent],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		HttpClientModule
	]
})
export class AppModule {}
