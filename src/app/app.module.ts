import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { UsersComponent } from './components/users/users.component';

import { FormsModule } from '@angular/forms';

import { UsersService } from '../services/users.service';
import { HttpClientModule } from '@angular/common/http';

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
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
