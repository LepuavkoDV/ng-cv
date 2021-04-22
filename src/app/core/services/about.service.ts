import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class AboutService extends CoreService {

  constructor(public http: HttpClient) {
    super(http);
  }

  getAboutPage(): Subject<any> {
    const data = new Subject<any>();
    this.http.get(`${this.apiEndpoint}/contents`, this.httpOptions)
      .subscribe(
        (res: any) => data.next(res),
        (err) => console.error(err)
      );
    return data;
  }
}
