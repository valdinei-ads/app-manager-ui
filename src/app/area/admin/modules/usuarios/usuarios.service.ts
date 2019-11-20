import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  httpOptions: any;

  url = 'https://localhost:5001/api/v1/usuario';

  constructor(private httpClient: HttpClient) 
  { 
      let token = localStorage.getItem("token")
      this.httpOptions = { 
        headers: new HttpHeaders (
          { 
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + token
          }
        )
      }
  }

  GetAll() 
  {
    let user = JSON.parse(localStorage.getItem('user'));
    return this.httpClient.get(this.url + '/' + user.id, this.httpOptions); 
  }

  GetById(id: string) 
  { 
    let user = JSON.parse(localStorage.getItem('user'));
    return this.httpClient.get(this.url + '/' + user.id + '/' + id, this.httpOptions); 
  }

  Post(usuario: any) 
  {
    let user = JSON.parse(localStorage.getItem('user'));
    usuario.usuarioId = user.id;
    return this.httpClient.post(this.url, JSON.stringify(usuario), this.httpOptions); 
  } 
  
  Put(usuario: any)
  { 
    let user = JSON.parse(localStorage.getItem('user'));
    usuario.usuarioId = user.id;
    return this.httpClient.put(this.url, JSON.stringify(usuario), this.httpOptions );
  }

  Delete(id: string)
  { 
    let user = JSON.parse(localStorage.getItem('user'));
    return this.httpClient.delete(this.url + '/' + user.id + '/' + id, this.httpOptions); 
  }
  
}
