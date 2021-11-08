import { HttpResponse } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { usuarioLogin } from '../../models/iniciarSesion';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  usuarioLogin: usuarioLogin={
    usuario: "",
    password: ""
  };

  constructor(private backend: BackendService, private router:Router) { 
  }

  mensajesA:any = [];
  mensaje:string = "";
  username:string = "";

  errorM:any = [];
  errorSesion:boolean = false;
  resp: string = "";
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
          this.username = this.mensaje
          this.router.navigate(['usuario'])
        }
      },
      (err) =>{
        console.log(err)
      }
    )
  }

  iniciarSesion(){
    this.backend.getUsuario(this.usuarioLogin)
    .subscribe(
      (res) =>{
        //console.log(res.body)
        this.errorM = res.body
        this.resp = this.errorM['message']
        if(this.resp == "ok"){
          this.errorSesion = false
          this.router.navigate(['admin'])
        }
        if(this.resp == "ok1"){
          console.log(res.body)
          this.errorSesion = false
          this.router.navigate(['usuario'])
        }else{
          this.errorSesion = true
        }
        
        
      }
    )
    // .subscribe(
    //   (res: HttpResponse<any>) =>{
        
    //     this.errorM = res.body
    //     console.log(res)
    //   },  
    //   err => {
    //     console.log(err)
    //   }
    // )
    // .toPromise()
    // .then(() => alert('Mostrado'))
    // .catch(()=> alert('hubo un problema'))
    
  }
}
