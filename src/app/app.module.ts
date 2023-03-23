import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './users/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetaileGuard } from './user-deatiles/user-detaile.guard';
import { UserDetileComponent } from './user-deatiles/user-deatiles.component';
import { AuthentcationGuard } from './user-login/auth.guard';
import { UserLoginComponent } from './user-login/user-login.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: UserLoginComponent,
     
      },
      {
        path: 'users',
        component: UserComponent,
        canActivate: [AuthentcationGuard],
      },
      {
        path: 'users/:id',
        component: UserDetileComponent,
        canActivate: [UserDetaileGuard],
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', redirectTo: 'login', pathMatch: 'full' },
    ]),
  ],
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserComponent,
    UserDetileComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
