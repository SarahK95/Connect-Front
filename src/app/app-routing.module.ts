import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './component/hotels/hotels.component';
import { HotelpageComponent } from './component/hotelpage/hotelpage.component';
import { BookingFormComponent } from './component/booking-form/booking-form.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: 'hotels', component: HotelsComponent},
  {path: 'hotelpage', component: HotelpageComponent},
  {path: 'booking', component: BookingFormComponent},
  { path: 'home', component: HomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo:"/home", pathMatch:"full"},
  { path:'**', component: NotFoundComponent},
  
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
