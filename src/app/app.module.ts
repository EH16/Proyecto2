import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';

import { BackendService } from './services/backend.service';
import { RegistroComponent } from './Components/registro/registro.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { AdminComponent } from './Components/admin/admin.component';
import { ConfiguracionComponent } from './Components/userComponents/configuracion/configuracion.component';
import { NuevoPostComponent } from './Components/userComponents/nuevo-post/nuevo-post.component';
import { SanitizadorPipe } from './sanitizador.pipe';
import { RankingComponent } from './Components/userComponents/ranking/ranking.component';
import { MisPostComponent } from './Components/userComponents/mis-post/mis-post.component';
import { UserAdminComponent } from './Components/adminComponents/user-admin/user-admin.component';
import { PostAdminComponent } from './Components/adminComponents/post-admin/post-admin.component';
import { UserAdminPostComponent } from './Components/adminComponents/user-admin-post/user-admin-post.component';
import { UserAdminEditComponent } from './Components/adminComponents/user-admin-edit/user-admin-edit.component';
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { PostAdminViewComponent } from './Components/adminComponents/post-admin-view/post-admin-view.component';
import { PostAdminEditComponent } from './Components/adminComponents/post-admin-edit/post-admin-edit.component';
import { ReportesComponent } from './Components/adminComponents/reportes/reportes.component'; // fonts provided for pdfmake


PdfMakeWrapper.setFonts(pdfFonts);

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistroComponent,
    UsuarioComponent,
    AdminComponent,
    ConfiguracionComponent,
    NuevoPostComponent,
    SanitizadorPipe,
    RankingComponent,
    MisPostComponent,
    UserAdminComponent,
    PostAdminComponent,
    UserAdminPostComponent,
    UserAdminEditComponent,
    PostAdminViewComponent,
    PostAdminEditComponent,
    ReportesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    BackendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
