import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsComponent } from './component/hotels/hotels.component';
import { HotelpageComponent } from './component/hotelpage/hotelpage.component';
import { BookingFormComponent } from './component/booking-form/booking-form.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminlogComponent } from './adminlog/adminlog.component';
import { AdminsignComponent } from './adminsign/adminsign.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    HotelpageComponent,
    BookingFormComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    NotFoundComponent,
    AdminlogComponent,
    AdminsignComponent,
    UserDashboardComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
