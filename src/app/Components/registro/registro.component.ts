import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service'
import { nuevoUsuario } from '../../models/nuevoUsuario'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nuevoUsuario: nuevoUsuario={
    name: "",
    gender: "",
    username: "",
    email: "",
    password: ""
  };

  constructor( private backend: BackendService) { }

  mensajesA:any = [];
  mensaje:string = "";
  mensajeMostrar:string= "";
  errorDatos:Boolean = false;
  loginSucces:Boolean = false;
  //Lista de errores
  camposVacios:string = "Debe de llenar todos los campos"
  nombreError:string = "Nombre de usuario ya existe, por favor escoja otro"
  passwordError:string = "La contraseña debe tener al menos 8 caracteres"
  passwordNum:string = "La contraseña debe contener al menos 1 numero"
  passwordSymb:string = "La contraseña debe contener al menos un simbolo"

  ngOnInit(): void {
  }

  registrarUsuario(){
    this.backend.nuevoUsuario(this.nuevoUsuario)
    .subscribe(
      (res) =>{
        //console.log(res.body)
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
          this.mensajeMostrar = "Usuario creado Correctamente!"
          this.loginSucces = true
          this.errorDatos = false
        }
      },
      (err) =>{
        console.log(err)
      }
    )
    
  }

}
