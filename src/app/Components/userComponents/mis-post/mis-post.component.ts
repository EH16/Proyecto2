import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-mis-post',
  templateUrl: './mis-post.component.html',
  styleUrls: ['./mis-post.component.css']
})
export class MisPostComponent implements OnInit {
  mensajesA:any = [];
  mensaje:string = "";
  mensajeMostrar:string ="";

  response:any = [];
  response2:any = [];
  username:string = "";
  ranking:number = 0;
  total:number = 0;
  errorSesion:boolean = false;
  resp:string = "Debe iniciar sesion Primero"

  constructor(private backend:BackendService, private router: Router) { }

  ngOnInit(): void {
    this.backend.getmisPost()
    .subscribe(
      (res) =>{
        //console.log(res.body)
        this.mensajesA = res.body
        this.mensaje = this.mensajesA['message']
        if(this.mensaje == "NoainiciadoSesion"){ 
          this.router.navigate(['inicio'])
        }else{
          
          this.username = this.mensajesA['name']
          this.ranking = this.mensajesA['ranking']
          this.total = this.mensajesA['total']
          this.response = this.mensajesA['data']
          this.response2 = this.mensajesA['data2']
          //console.log(this.response2)
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
