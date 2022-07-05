import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './component/hotels/hotels.component';
import { HotelpageComponent } from './component/hotelpage/hotelpage.component';
import { BookingFormComponent } from './component/booking-form/booking-form.component';

const routes: Routes = [
  {path: 'hotels', component: HotelsComponent},
  {path: 'hotelpage', component: HotelpageComponent},
  {path: 'booking', component: BookingFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
