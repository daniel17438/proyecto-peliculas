import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes} from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { AcercaDeComponent } from '../components/acerca-de/acerca-de.component';

const routes: Routes = [
{
path: '',
children:[
  {
  path: 'about',
  component: AboutComponent
  },
  {
    path: 'acerca-de',
    component: AcercaDeComponent
  }

]
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AuthRoutingModule { }
