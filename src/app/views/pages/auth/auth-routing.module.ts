import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthIndexComponent } from "./components/auth-index/auth-index.component";
import { LoginComponent } from "./components/login/login.component";
import { ResgisterComponent } from "./components/resgister/resgister.component";
import { ConfirmEmailComponent } from "./components/confirm-email/confirm-email.component";
import { ResetPasswordComponent } from "./components/reset-password/reset-password.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";


const routes: Routes = [
    {
        path: '',
        component: AuthIndexComponent,
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: LoginComponent,
                data: { returnUrl: window.location.pathname }
            },
            {
                path: 'register',
                component: ResgisterComponent
            },
            {
                path: 'confirrm-email',
                component: ConfirmEmailComponent
            },
            {
                path: 'forget-password',
                component: ForgotPasswordComponent
            },
            {
                path: 'reset-password',
                component: ResetPasswordComponent
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
