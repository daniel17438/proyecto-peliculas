import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { PeliComponent} from './components/peli/peli.component';
import { InicioComponent } from './components/inicio/inicio.component';


const routes: Routes = [
  {path: 'cartelera', component: CarteleraComponent},
  {path: 'login', component: LoginComponent},
  {path: 'pelicula', component: PeliculaComponent},
  {path: 'peli', component: PeliComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'inicio', component: InicioComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'cartelera'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
