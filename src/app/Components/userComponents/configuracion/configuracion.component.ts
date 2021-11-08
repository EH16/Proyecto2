import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { nuevoUsuario } from 'src/app/models/nuevoUsuario';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {
  nuevoUsuario: nuevoUsuario={
    name: "",
    gender: "",
    username: "",
    email: "",
    password: ""
  };

  constructor(private backend:BackendService, private router:Router) { }

  mensajesA:any = [];
  mensaje:string = "";
  
  name:string = "";
  gender:string = "";
  username:string = "";
  email:string="";

  mensajeMostrar:string= "";
  errorDatos:Boolean = false;
  loginSucces:Boolean = false;
  camposVacios:string = "Debe de llenar todos los campos"
  nombreError:string = "Nombre de usuario ya existe, por favor escoja otro"
  passwordError:string = "La contraseña debe tener al menos 8 caracteres"
  passwordNum:string = "La contraseña debe contener al menos 1 numero"
  passwordSymb:string = "La contraseña debe contener al menos un simbolo"
  
  ngOnInit(): void {
    this.backend.getUser()
    .subscribe(
      (res) =>{
        //console.log(res.body)
        this.mensajesA = res.body
        this.mensaje = this.mensajesA['message']
        if(this.mensaje == "NoainiciadoSesion"){ 
          this.router.navigate(['inicio'])
        }else{
          this.name = this.mensajesA['name']
          this.gender = this.mensajesA['gender']
          this.username = this.mensajesA['username']
          this.email = this.mensajesA['email']
          
          
        }
      },
      (err) =>{
        console.log(err)
      }
    )
  }

  actualizarUsuario(){
    this.backend.updateUsuario(this.nuevoUsuario)
    .subscribe(
      (res) =>{
        this.mensajesA = res.body
        this.mensaje = this.mensajesA['message']
        if (this.mensaje == "errorVacio"){
          this.mensajeMostrar = this.camposVacios
          this.errorDatos = true
          this.loginSucces = false
        }
        if (this.mensaje == "errorNombre"){
          this.mensajeMostrar = this.nombreError
          this.errorDatos = true
          this.loginSucces = false
        }
        if (this.mensaje == "errorPasswordLength"){
          this.mensajeMostrar = this.passwordError
          this.errorDatos = true
          this.loginSucces = false
        }
        if(this.mensaje == "errorPasswordNum"){
          this.mensajeMostrar = this.passwordNum
          this.errorDatos = true
          this.loginSucces = false
        }
        if(this.mensaje == "errorPasswordSymb"){
          this.mensajeMostrar = this.passwordSymb
          this.errorDatos = true
          this.loginSucces = false
        }
        if(this.mensaje == "datosOk"){
          this.mensajeMostrar = "Datos Actualizados!"
          this.loginSucces = true
          this.errorDatos = false
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
