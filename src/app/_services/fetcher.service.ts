import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FocusTrapManager } from '@angular/cdk/a11y/focus-trap/focus-trap-manager';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetcherService {

  constructor(private httpClient: HttpClient) { }
   

  public get(url: string): Observable<Object>{
    return this.httpClient.get(url, {responseType: "json"})
  }
}
