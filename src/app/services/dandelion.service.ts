import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DandelionService {
  public apiToken: string = '';

  constructor(private http: HttpClient) {}

  checkTokenValidity(token: string): Observable<any> {

    // return this.http.options(`${env.BASE_URL}/nex/v1/`, {
    //   headers: {
    //     'Access-Control-Allow-Origin':'*'
    //   },
    //   params: {
    //     'token': token
    //   }
    // });

    return this.http.get<any>(`${env.BASE_URL}/nex/v1/`, {
      params: new HttpParams()
        .set('token', token)
        .set('text', 'Test object'),
    });
  }
}
