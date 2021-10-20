import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DandelionService {

  public apiToken: string = ''; 

  constructor(private http: HttpClient) { }

  

}
