import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { CardUserComponent } from './card-user/card-user.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [{ path: '', component: HomeComponent }, { path: ':username', component: CardUserComponent }];
@NgModule({
  declarations: [AppComponent, HomeComponent, CardUserComponent],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    MatListModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {}
