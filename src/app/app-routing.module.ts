import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './component/hotels/hotels.component';
import { HotelpageComponent } from './component/hotelpage/hotelpage.component';
import { BookingFormComponent } from './component/booking-form/booking-form.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminlogComponent } from './adminlog/adminlog.component';
import { AdminsignComponent } from './adminsign/adminsign.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {path: 'hotels', component: HotelsComponent},
  {path: 'hotelpage', component: HotelpageComponent},
  {path: 'hotels/hotelpage/:id', component: HotelpageComponent},

  {path: 'booking', component: BookingFormComponent},
  { path: 'home', component: HomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'adminlog', component: AdminlogComponent},
  { path: 'adminsign', component: AdminsignComponent},
  { path: 'user-dashboard', component: UserDashboardComponent},
  { path: 'admin-dashboard', component: AdminDashboardComponent},
  { path: '', redirectTo:"/home", pathMatch:"full"},
  { path:'**', component: NotFoundComponent},
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
