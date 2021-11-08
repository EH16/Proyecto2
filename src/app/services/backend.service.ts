import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { usuarioLogin } from '../models/iniciarSesion'
import { nuevoUsuario } from '../models/nuevoUsuario'
import { nuevaPublicacion } from '../models/publicacionUsuario';
import { publicacion } from '../models/modificarPublicacion';
 
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  URL: string = 'https://ipc1proyect2.herokuapp.com/';
  
    getUsuario(inicio: usuarioLogin){
    return this.http.post(`${this.URL}/inicio`,inicio,{observe: 'response'});
    }

    getUsuarios(){
      return this.http.get(`${this.URL}/ObetenerUsuarios`,{observe: 'response'})
    }
    getUser(){
      return this.http.get(`${this.URL}/usuario`, {observe: 'response'});
    }

    getmisPost(){
      return this.http.get(`${this.URL}/misPost`, {observe: 'response'});
    }

    nuevoUsuario(registro: nuevoUsuario){
      return this.http.post(`${this.URL}/registro`,registro,{observe: 'response'})
  }
    updateUsuario(actualizar: nuevoUsuario){
      return this.http.put(`${this.URL}/configuracion`, actualizar,{observe: 'response'})
    }

    nuevaPublicacion(publicacion: nuevaPublicacion){
      return this.http.post(`${this.URL}/nuevopost`, publicacion, {observe: 'response'})
    }

    modificarPublicacion(publicacion: nuevaPublicacion){
      return this.http.put(`${this.URL}/nuevopost`, publicacion, {observe: 'response'})
    }

    nuevoLike(id: String){
      return this.http.put(`${this.URL}/usuario`, id ,{observe: 'response'})
    }

    cerrarSesion(){
      return this.http.get(`${this.URL}/cerrar`, {observe: 'response'})
    }

    ranking(){
      return this.http.get(`${this.URL}/ranking`, {observe: 'response'})
    }

    getPostUser(username: String){
      return this.http.post(`${this.URL}/getPostUser`, username ,{observe: 'response'})
    }

    getPostU(){
      return this.http.get(`${this.URL}/getPostUser`, {observe: 'response'})
    }

    postEditUser(id: String){
      return this.http.post(`${this.URL}/editUserByAdmin`, id ,{observe: 'response'})
    }

    geteditUserAdmin(){
      return this.http.get(`${this.URL}/editUserByAdmin`,{observe: 'response'})
    }

    editUserAdmin(actualizar: nuevoUsuario){
      return this.http.put(`${this.URL}/editUserByAdmin`, actualizar,{observe: 'response'})
    }

    deleteUser(id: String){
      return this.http.delete(`${this.URL}/deleUserAdmin${id}`, {observe: 'response'} )
    }
    
    deletePost(id: String){
      return this.http.delete(`${this.URL}/delePostAdmin${id}`, {observe: 'response'} )
    }

    cargaMasivaUsuarios(id: any){
      return this.http.post(`${this.URL}/cargaMasivaUsuarios`, id,{observe: 'response'} )
    }

    cargaMasivaPost(id: any){
      return this.http.post(`${this.URL}/cargaMasivaPost`, id,{observe: 'response'} )
    }


    postEditview(id: Number){
      return this.http.post(`${this.URL}/editPostByAdmin`, id,{observe: 'response'} )
    }

    obtenerListaPostAdmin(){
      return this.http.get(`${this.URL}/editPostByAdmin`, {observe: 'response'} )
    }

    obtenerPost(){
      return this.http.get(`${this.URL}/obtenerPost`, {observe: 'response'} )

    }

    editarPost(){
      return this.http.put(`${this.URL}/editPostByAdmin`, {observe: 'response'} )
    }
}
