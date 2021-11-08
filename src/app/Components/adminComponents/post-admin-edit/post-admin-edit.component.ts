import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { nuevaPublicacion } from 'src/app/models/publicacionUsuario';
import { Router } from '@angular/router';



@Component({
  selector: 'app-post-admin-edit',
  templateUrl: './post-admin-edit.component.html',
  styleUrls: ['./post-admin-edit.component.css']
})
export class PostAdminEditComponent implements OnInit {

  
  publicacion: nuevaPublicacion = {
    type: "",
    url: "",
    category: ""
  };

  mensajesA: any = [];
  response: any = [];
  type: string = "";
  url: string = "";
  category:string = "";

  mensaje:string = "";
  mensajeMostrar:string ="";

  errorVacio:string= "Debe llenar todos los campos";
  errorType:string = "Error en el tipo de publicacion"
  error:boolean = false;
  newpostSucces:boolean = false;

  constructor(private backend: BackendService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerPost();
  }

  obtenerPost(){
    this.backend.obtenerPost()
    .subscribe(
      res =>{
        //console.log(res.body)
        this.mensajesA = res.body
        
        this.response = this.mensajesA['response']
        this.type=this.response[0].type
        this.url=this.response[0].url
        this.category=this.response[0].category
      },
      err =>{
        console.log(err)
      }
    )
  }

  modificarPublicacion(){
    console.log(this.publicacion)
    this.backend.modificarPublicacion(this.publicacion)
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
          this.mensajeMostrar = "Publicacion modificada correctamente"
          this.newpostSucces = true
          this.error = false
        }
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  botonRegresar(){
    this.router.navigate(['admin/posts'])
  }
}
