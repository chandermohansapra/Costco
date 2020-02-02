import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WareHouseLocationComponent } from './ware-house-location/ware-house-location.component';
import { WareHouseSectionsComponent } from './ware-house-sections/ware-house-sections.component';

@NgModule({
  declarations: [
    AppComponent,
    WareHouseLocationComponent,
    WareHouseSectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
