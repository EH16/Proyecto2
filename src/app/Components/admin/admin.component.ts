import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private backend: BackendService, private router: Router) { }

  mensajesA:any =[];
  mensaje = ""

  ngOnInit(): void {
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
