import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { SanitizadorPipe } from 'src/app/sanitizador.pipe';

@Component({
  selector: 'app-post-admin-view',
  templateUrl: './post-admin-view.component.html',
  styleUrls: ['./post-admin-view.component.css']
})
export class PostAdminViewComponent implements OnInit {

  constructor(private backend: BackendService) { }

  mensajesA:any = [];
  mensaje:string = "";
  response:any = [];
  esImagen:boolean = false;
  esVideo: boolean = false;


  owner:string = ""
  like = ""

  ngOnInit(): void {
    this.backend.obtenerPost()
    .subscribe(
      res =>{
        this.mensajesA = res.body
        this.response = this.mensajesA['response']
        this.owner = this.response[0].owner
        this.like = this.response[0].like
        console.log(this.response[0].type)
        if (this.response[0].type == "imagen" || this.response[0].type == "Imagen" ){
          this.esImagen = true;
          this.esVideo = false;

        }
        if (this.response[0].type == "video" || this.response[0].type == "Video" ){
          this.esImagen = false;
          this.esVideo = true;
        }
        
      },
      err =>{
        console.log(err)
      }
    )
  }

}
