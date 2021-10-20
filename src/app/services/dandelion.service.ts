import { HttpClient, HttpParams } from '@angular/common/http';
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
    return this.http.get<any>(`${env.BASE_URL}/nex/v1/`, {
      params: new HttpParams()
        .set('token', this.apiToken)
        .set('text', 'Test object'),
    });
  }
}
