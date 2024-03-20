import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FilmsComponent } from './pages/films/films.component';
import { ShipComponent } from './pages/ship/ship.component';

export const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'films', component:FilmsComponent},
  {path:'ship', component:ShipComponent}
];
