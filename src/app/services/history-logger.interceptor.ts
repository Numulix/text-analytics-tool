import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistoryService } from './history.service';

@Injectable()
export class HistoryInterceptor implements HttpInterceptor {

    constructor(private history: HistoryService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.history.addToLog({ timestamp: new Date(), endpoint: req.urlWithParams })
        return next.handle(req);
    }
}