import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  mensajesA:any = [];
  mensaje:string = "";
  mensajeMostrar:string ="";

  response:any = [];
  response2:any = [];
  username:string = "";
  errorSesion:boolean = false;
  resp:string = "Debe iniciar sesion Primero"

  esImagen:boolean = false;
  esVideo:boolean = false;

  constructor(private backend: BackendService, private router:Router) { }

  ngOnInit(): void {
    this.backend.ranking()
    .subscribe(
      (res) =>{
        this.mensajesA = res.body
        this.response = this.mensajesA['message']
        console.log(this.response)
        for (var index in this.response){
          
          if(this.response[index].type == "imagen" || this.response[index].type == "Imagen"){
            this.esImagen = true
            this.esVideo = false
            //console.log(this.response[index].type)
          }
          if(this.response[index].type == "video" || this.response[index].type == "Video"){
            this.esImagen = false
            this.esVideo = true
          }

        }
      },
      (err) =>{
        console.log(err)
      }
    )
  }

  cerrarSesion(){
    this.backend.cerrarSesion()
    .subscribe(
      (res) =>{
        this.mensajesA = res.body
        this.mensaje = this.mensajesA['message']
        if (this.mensaje == "sesionCerrada"){
          this.router.navigate(['inicio'])
        }
      },
      (err) =>{
        console.log(err)
      }
    )
  }

}
