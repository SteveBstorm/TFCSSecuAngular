import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { listResolver } from './shared/list.resolver';
import { authGuard } from './shared/auth.guard';
import { ErreurComponent } from './shared/erreur/erreur.component';

const routes: Routes = [
  {path : '', redirectTo : 'login', pathMatch : 'full'},
  {path : 'login', component : LoginComponent},
  {path : 'userlist',canActivate : [authGuard] , resolve : {maliste : listResolver}, component : UserlistComponent},
  {path : 'erreur', component : ErreurComponent},
  {path : '**', redirectTo : 'erreur'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
