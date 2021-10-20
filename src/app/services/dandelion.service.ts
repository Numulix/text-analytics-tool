import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DandelionService {
  public apiToken: string = '';

  visibleSubject = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  checkTokenValidity(token: string): Observable<any> {
    return this.http.get<any>(`${env.BASE_URL}/nex/v1/`, {
      params: new HttpParams()
        .set('token', token)
        .set('text', 'Test object'),
    });
  }

  onMessage(): Observable<any> {
    return this.visibleSubject.asObservable();
  }

  sendMessage(flag: boolean) {
    this.visibleSubject.next(flag);
  }
}
