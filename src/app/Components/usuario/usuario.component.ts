import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  

  constructor(private backend:BackendService, private router: Router) { }
  mensajesA:any = [];
  response:any = [];
  response2:any = [];
  mensaje:string = "";
  username:string = "";
  errorSesion:boolean = false;
  resp:string = "Debe iniciar sesion Primero"

  ngOnInit():  void{
    this.backend.getUser()
    .subscribe(
      (res) =>{
        //console.log(res.body)
        this.mensajesA = res.body
        this.mensaje = this.mensajesA['message']
        if(this.mensaje == "NoainiciadoSesion"){ 
          this.router.navigate(['inicio'])
        }else{
          
          this.username = this.mensajesA['name']
          this.response = this.mensajesA['data']
          this.response2 = this.mensajesA['data2']
          //console.log(this.mensajesA)
        }
      },
      (err) =>{
        console.log(err)
      }
    )
  }

  botonLike(id: String){
    this.backend.nuevoLike(id)
    .subscribe(
      (res)=> {
        this.mensajesA = res.body
        this.response = this.mensajesA['data']
        this.response2 = this.mensajesA['data2']
        console.log(id)
      },
      (err) => {
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
