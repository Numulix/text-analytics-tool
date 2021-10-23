import { Injectable } from '@angular/core';
import { Log } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  public logs: Log[] = [];

  constructor() { }

  addToLog(logData: { timestamp: Date, endpoint: string }) {
    this.logs.push(logData);
  }
}
