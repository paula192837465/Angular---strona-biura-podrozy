
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { BasketComponent } from './basket/basket.component';
import { FormComponent } from './form/form.component';
import { ListOfTripsComponent } from './list-of-trips/list-of-trips.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { AuthGuard } from './guards/auth.guard';
import { EditorGuard } from './guards/editor.guard';
import { AdminGuard } from './guards/admin.guard';
import { UsersListComponent } from './users-list/users-list.component';
import { ClientGuard } from './guards/client.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '', redirectTo: 'list-of-trips', pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'basket', component: BasketComponent , canActivate: [ClientGuard]},
  { path: 'form', component: FormComponent, canActivate: [EditorGuard] },
  { path: 'list-of-trips', component: ListOfTripsComponent,  canActivate: [AuthGuard]},
  { path: 'trip-details/:id', component: TripDetailsComponent,  canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'users-list', component: UsersListComponent, canActivate: [AdminGuard]}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }