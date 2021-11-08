import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { nuevaPublicacion } from '../../../models/publicacionUsuario'

@Component({
  selector: 'app-nuevo-post',
  templateUrl: './nuevo-post.component.html',
  styleUrls: ['./nuevo-post.component.css']
})
export class NuevoPostComponent implements OnInit {
  publicacion: nuevaPublicacion = {
    type: "",
    url: "",
    category: ""
  };

  mensajesA:any = [];
  mensaje:string = "";
  mensajeMostrar:string ="";

  errorVacio:string= "Debe llenar todos los campos";
  errorType:string = "Error en el tipo de publicacion"
  error:boolean = false;
  newpostSucces:boolean = false;

  constructor(private backend: BackendService, private router: Router) { }

  ngOnInit(): void {
    this.backend.getUser()
    .subscribe(
      (res) =>{
        //console.log(res.body)
        this.mensajesA = res.body
        this.mensaje = this.mensajesA['message']
        if(this.mensaje == "NoainiciadoSesion"){ 
          this.router.navigate(['inicio'])
        }
      },
      (err) =>{
        console.log(err)
      }
    )
  }

  nuevaPublicacion(){
    this.backend.nuevaPublicacion(this.publicacion)
    .subscribe(
      (res) =>{
        this.mensajesA = res.body
        this.mensaje = this.mensajesA['message']
        if (this.mensaje == "errorVacio"){
          this.mensajeMostrar = this.errorVacio
          this.error = true
          this.newpostSucces = false
        }
        if(this.mensaje == "errorType"){
          this.mensajeMostrar = this.errorType
          this.error = true
          this.newpostSucces = false
        }
        if(this.mensaje == "ok"){
          this.mensajeMostrar = "Publicacion Creada correctamente"
          this.newpostSucces = true
          this.error = false
        }
      },
      (err)=>{
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
