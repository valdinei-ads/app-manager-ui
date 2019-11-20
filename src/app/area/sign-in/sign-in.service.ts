import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  
  httpOptions = {
    headers: new HttpHeaders ({ 'Content-Type': 'application/json' })
  };
  
  

  
  url = 'https://localhost:5001/api/v1/sign-in';

  constructor(private httpClient: HttpClient) 
  { }

  authenticate(usuario: any) 
  { return this.httpClient.post(this.url, JSON.stringify(usuario), this.httpOptions); } 
  
}
