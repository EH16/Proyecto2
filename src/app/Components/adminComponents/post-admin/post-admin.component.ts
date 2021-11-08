import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';

interface publi{
  type: string;
  url: string;
  category: string;
  date: string;
  owner: string;
  like: number;
}

type TableRow=[string,string,string,string,string,number]
@Component({
  selector: 'app-post-admin',
  templateUrl: './post-admin.component.html',
  styleUrls: ['./post-admin.component.css']
})
export class PostAdminComponent implements OnInit {

  mensajesA: any = [];
  response: any = [];
  response2: any = [];
  mensaje: string = "";

  json: any = {};
  json1: any = {};

  constructor(private backend: BackendService, private router: Router) { }



  ngOnInit(): void {
    this.obtenerPublicaciones();
  }

  obtenerPublicaciones() {
    this.backend.obtenerListaPostAdmin()
      .subscribe(
        res => {
          this.mensajesA = res.body
          this.response = this.mensajesA['message']
        },
        err => {
          console.log(err)
        }
      )
  }

  botonVerPublicacion(id: Number) {
    this.backend.postEditview(id)
      .subscribe(
        res => {
          console.log(res.body)
          this.router.navigate(['admin/post/view']);
        },
        err => {
          console.log(err)
        }
      )

  }

  botonEditarPublicacion(id: Number) {
    this.backend.postEditview(id)
      .subscribe(
        res => {
          console.log(res.body)
          this.router.navigate(['admin/post/edit']);
        },
        err => {
          console.log(err)
        }
      )

  }

  botonEliminarPublicacion(id: String) {
    this.backend.deletePost(id)
      .subscribe(
        res => {
          console.log(res)
          this.obtenerPublicaciones();
        },
        err => {
          console.log(err)
        }
      )
  }

  upload(e: any) {
    var file = e.target.files[0]
    var reader1 = new FileReader()

    reader1.onload = (e) => {
      //console.log(e.target?.result)
      this.json = e.target?.result
      //console.log(this.json)
      this.json1 = (JSON.parse(this.json))
      this.backend.cargaMasivaPost(this.json1)
        .subscribe(
          res => {
            console.log(res.body)
            this.obtenerPublicaciones()
          },
          err => {
            console.log(err)
          }
        )
    }
    reader1.readAsText(file)

    //console.log(this.json)
  }

  generarReporte(){
    const newPdf = new PdfMakeWrapper();

    
    newPdf.add( new Txt('Lista de Publicaciones').bold().italics().end);
    newPdf.add( new Txt('______________________________________________________________________________________________').end);
    newPdf.add( new Txt('@').end)
    newPdf.add(new Table([
      ['Tipo', 'URL', 'Category','date','owner','like'],
       ...this.extraerDatos(this.response)
    ]).widths([50,200,50,50,50,50])
    .heights(rowIndex => {
        return rowIndex ===0 ? 30: 0;
    })
    .layout({
      fillColor: (rowIndeSx: any, node: any, columnIndex: any)=>{
        return rowIndeSx % 2 === 0 ? '#CCC2CC' : '';
      }
    })
    .end);

    newPdf.create().open();
  }

  extraerDatos(data: publi[]): TableRow[]{
    return data.map(row =>[row.type, row.url, row.category,row.date,row.owner, row.like] );
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
