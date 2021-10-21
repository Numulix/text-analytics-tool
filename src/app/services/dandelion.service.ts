import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { EntityExtractionResponse, LanguageDetectionResponse, TextSimilarityResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DandelionService {
  public apiToken: string = '';

  visibleSubject = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  checkTokenValidity(token: string): Observable<any> {
    return this.http.get<any>(`${env.BASE_URL}/nex/v1/`, {
      params: new HttpParams().set('token', token).set('text', 'Test object'),
    });
  }

  onMessage(): Observable<any> {
    return this.visibleSubject.asObservable();
  }

  sendMessage(flag: boolean) {
    this.visibleSubject.next(flag);
  }

  sendEntityExtractionRequest(formData: {
    text: string;
    min_confidence: number;
    include: string;
  }): Observable<EntityExtractionResponse> {
    let params = new HttpParams()
      .set('text', formData.text)
      .set('min_confidence', formData.min_confidence)
      .set('include', formData.include)
      .set('token', this.apiToken);

    return this.http.get<EntityExtractionResponse>(`${env.BASE_URL}/nex/v1/`, {
      params: params,
    });
  }

  sendTextSimilarityRequest(formData: {
    text1: string;
    text2: string;
  }): Observable<TextSimilarityResponse> {
    let params = new HttpParams()
      .set('text1', formData.text1)
      .set('text2', formData.text2)
      .set('token', this.apiToken);

    return this.http.get<TextSimilarityResponse>(`${env.BASE_URL}/sim/v1/`, {
      params: params
    })
  }

  sendLanguageDetectionRequest(formData: {
    text: string;
    clean: boolean;
  }): Observable<LanguageDetectionResponse> {
    let params = new HttpParams()
      .set('text', formData.text)
      .set('clean', formData.clean)
      .set('token', this.apiToken);

    return this.http.get<LanguageDetectionResponse>(`${env.BASE_URL}/li/v1/`, {
      params: params
    })
  }
}
