import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFristComponent } from './my-frist/my-frist.component';
import { MySecondComponent } from './my-second/my-second.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFristComponent,
    MySecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
