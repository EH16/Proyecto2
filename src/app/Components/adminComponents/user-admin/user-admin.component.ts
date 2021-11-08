import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';
import { ITable } from 'pdfmake-wrapper';
import { BackendService } from 'src/app/services/backend.service';



interface User{
  name: string;
  gender: string;
  username: string;
  email: string;
}
type TableRow = [string, string, string, string]

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {

  mensajesA:any = [];
  mensaje:string = "";
  mensajeMostrar:string ="";
  json:any = {};
  json1: any = {};

  response:any = [];

  info:string = "";

  constructor(private backend:BackendService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this.backend.getUsuarios()
    .subscribe(
      (res) =>{
        this.mensajesA = res.body
        this.response = this.mensajesA['data']
        //console.log(this.response)
      },
      (err) => {
        console.log(err)
      }
    )
  }

  verPostDeUsuario(usernanme: String){
    this.backend.getPostUser(usernanme)
    .subscribe(
      (res) =>{
        console.log(res.body)
        this.router.navigate(['admin/users/view'])
      },
      (err) =>{
        console.log(err)
      }

    )
  }

  botonEditarUsuario(id: String){
   this.backend.postEditUser(id)
   .subscribe(
     (res) =>{
       console.log(res.body)
       this.router.navigate(['admin/users/edit'])
     },
     (err) => {
       console.log(err)
     }
   )   
  }

  botonEliminarUsuario(id: String){
    this.backend.deleteUser(id)
    .subscribe(
      res =>{
        console.log(res)
        this.obtenerUsuarios();
      },
      err =>{
        console.log(err)
      }
    )
  }

  
  upload(e: any){
    var file = e.target.files[0]
    var reader = new FileReader()
    
    reader.onload = (e) =>{
       //console.log(e.target?.result)
       this.json = e.target?.result
       //console.log(this.json)
       this.json1 = (JSON.parse(this.json))
        this.backend.cargaMasivaUsuarios(this.json1)
        .subscribe(
          res =>{
            //console.log(res.body)
            this.obtenerUsuarios()
          },
          err =>{
            console.log(err)
          }
        )
    }
      reader.readAsText(file)

      //console.log(this.json)
  }

  generarReporte(){
    const newPdf = new PdfMakeWrapper();

    
    newPdf.add( new Txt('Lista de Usuarios').bold().italics().end);
    newPdf.add( new Txt('______________________________________________________________________________________________').end);
    newPdf.add( new Txt('@').end)
    newPdf.add(new Table([
      ['Nombre', 'Genero', 'Username','Email'],
       ...this.extraerDatos(this.response)
    ]).widths([120,70,100,180])
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

  extraerDatos(data: User[]): TableRow[]{
    return data.map(row =>[row.name, row.gender, row.username,row.email]);
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
