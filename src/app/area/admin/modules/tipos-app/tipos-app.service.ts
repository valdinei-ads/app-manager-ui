import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TiposAppService {

  url = 'https://localhost:5001/api/v1/tipoapp';
  
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
  { return this.httpClient.get(this.url, this.httpOptions); }

  GetById(id: string) 
  { 
    return this.httpClient.get(this.url + '/' + id, this.httpOptions); 
  }

  Post(tipoapp: any) 
  { 
    return this.httpClient.post(this.url, JSON.stringify(tipoapp), this.httpOptions); 
  } 
  
  Put(tipoapp: any)
  { 
    return this.httpClient.put(this.url, JSON.stringify(tipoapp), this.httpOptions );
  }

  Delete(id: string)
  { 
    return this.httpClient.delete(this.url + '/' + id, this.httpOptions); 
  }
}
