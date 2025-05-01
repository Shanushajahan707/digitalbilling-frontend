import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NewinvoiceComponent } from './component/newinvoice/newinvoice.component';
import { MainComponent } from './component/Home/main/main.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/login',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },{
  //   path: 'home',
  //   component: DashboardComponent
  // },{
  //   path:'newbill',
  //   component:NewinvoiceComponent
  // }
  {
    path: '',
    redirectTo: '/BellesHome',
    pathMatch: 'full'
  }
  ,{
    path: 'BellesHome',
    component:MainComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
