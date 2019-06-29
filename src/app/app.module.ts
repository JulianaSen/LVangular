import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { UsersComponent } from './components/users/users.component';

const appRoutes:Routes = [
  {path: '', component: AdminPageComponent},
  {path: 'users', component: UsersComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
