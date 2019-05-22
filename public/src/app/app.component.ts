import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  emailInfo: object;
  alertMessage: object;

  constructor (
    private _httpService: HttpService
  ) {}

  ngOnInit() {
    this.emailInfo = {};
    this.alertMessage = {};
  }

  sendEmail() {
    let obs = this._httpService.sendEmail(this.emailInfo);
    obs.subscribe(res => {
      console.log(res);
      
      if (res['status']) {
        this.alertMessage = {
          message: res['message'],
          status: 'success'
        }
      }
    })
    this.alertMessage = {}
  }
}
