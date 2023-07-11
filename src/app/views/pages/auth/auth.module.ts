import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResgisterComponent } from './components/resgister/resgister.component';
import { AuthIndexComponent } from './components/auth-index/auth-index.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmEmailComponent } from './components/confirm-email/confirm-email.component';



@NgModule({
  declarations: [
    ResgisterComponent,
    AuthIndexComponent,
    LoginComponent,
    LogoutComponent,
    ConfirmEmailComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
