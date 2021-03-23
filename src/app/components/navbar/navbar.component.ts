import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from '../../service/peliculas.service';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  peliculas: []= [];
  loading: boolean=false;

  buscar: string= "";

  constructor( public servi: PeliculasService, public router: Router, public authService: AuthService ) { }

  ngOnInit(): void {
  }

  buscarPeliculas() {
    if (this.buscar.length === 0) {
      return;
    }
    this.servi.buscarPeliculas(this.buscar).subscribe((data: any) => {
      this.loading = false;
      console.log(data)

      this.peliculas = data.results;
      if (this.peliculas.length === 0) {
        // this.noEncontrado = true;
      }

      this.buscar= "";

      this.router.navigateByUrl("/pelicula");
    }, error => {
      console.log(error);
      this.loading = false;



    });
  }
}
