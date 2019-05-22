import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }

  sendEmail(emailInfo: object) {
    return this._http.post('/api/send/email', emailInfo)
  }
  
}
