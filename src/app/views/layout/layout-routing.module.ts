import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutIndexComponent } from "./components/layout-index/layout-index.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutIndexComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
             {
                path: 'dashboard',
                loadChildren: () =>
                import('../pages/dashboard/dashboard.module').then( m => m.DashboardModule),
            } 
        ]
    },

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
