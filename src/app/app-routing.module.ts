import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Components/inicio/inicio.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { UsuarioComponent } from './Components/usuario/usuario.component'
import { AdminComponent } from './Components/admin/admin.component';
import { ConfiguracionComponent } from './Components/userComponents/configuracion/configuracion.component';
import { NuevoPostComponent } from './Components/userComponents/nuevo-post/nuevo-post.component';
import { MisPostComponent } from './Components/userComponents/mis-post/mis-post.component';
import { RankingComponent } from './Components/userComponents/ranking/ranking.component';
import { UserAdminComponent } from './Components/adminComponents/user-admin/user-admin.component';
import { PostAdminComponent } from './Components/adminComponents/post-admin/post-admin.component';
import { UserAdminPostComponent } from './Components/adminComponents/user-admin-post/user-admin-post.component';
import { UserAdminEditComponent } from './Components/adminComponents/user-admin-edit/user-admin-edit.component';
import { PostAdminViewComponent } from './Components/adminComponents/post-admin-view/post-admin-view.component';
import { PostAdminEditComponent } from './Components/adminComponents/post-admin-edit/post-admin-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/inicio",
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'usuario',
    component: UsuarioComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'configuracion',
    component: ConfiguracionComponent
  },
  {
    path: 'nuevo-post',
    component: NuevoPostComponent
  },
  {
    path: 'misPost',
    component: MisPostComponent
  },
  {
    path: 'ranking',
    component: RankingComponent
  },
  {
    path: 'admin/users',
    component: UserAdminComponent

  },
  {
    path: 'admin/users/view',
    component: UserAdminPostComponent
  },
  {
    path: 'admin/users/edit',
    component: UserAdminEditComponent
  },
  {
    path: 'admin/posts',
    component: PostAdminComponent
  },
  {
    path: 'admin/post/view',
    component: PostAdminViewComponent
  },
  {
    path: 'admin/post/edit',
    component: PostAdminEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
