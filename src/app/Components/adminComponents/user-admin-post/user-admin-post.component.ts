import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-user-admin-post',
  templateUrl: './user-admin-post.component.html',
  styleUrls: ['./user-admin-post.component.css']
})
export class UserAdminPostComponent implements OnInit {

  constructor(private backend: BackendService, private router:Router) { }
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

  ngOnInit(): void {
    this.backend.getPostU()
    .subscribe(
      res =>{
        this.mensajesA = res.body
        this.mensaje = this.mensajesA['message']

        this.username = this.mensajesA['name']
        this.ranking = this.mensajesA['ranking']
        this.total = this.mensajesA['total']
        this.response = this.mensajesA['data']
        this.response2 = this.mensajesA['data2']
      },
      err =>{
        console.log(err)
      }
    )
  }

  botonRegresar(){
    this.router.navigate(['admin/users'])
  }

}
