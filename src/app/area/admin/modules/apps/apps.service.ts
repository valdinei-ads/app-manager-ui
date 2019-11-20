import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppsService {
  
  url = 'https://localhost:5001/api/v1/app';
  
  httpOptions: any;

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

  Post(app: any) 
  { 
    return this.httpClient.post(this.url, JSON.stringify(app), this.httpOptions); 
  } 
  
  Put(app: any)
  { let user = JSON.parse(localStorage.getItem('user'));
    app.clienteId - user.id;
    return this.httpClient.put(this.url, JSON.stringify(app), this.httpOptions );
  }

  Delete(id: string)
  { 
    let user = JSON.parse(localStorage.getItem('user'));
    return this.httpClient.delete(this.url + '/' + user.id +'/'+ id, this.httpOptions); 
  }
}
