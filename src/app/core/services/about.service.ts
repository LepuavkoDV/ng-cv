import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { CoreService } from './core.service';
import { IContent } from '../../shared/models/icontent';

@Injectable({
  providedIn: 'root'
})
export class AboutService extends CoreService {

  constructor(public http: HttpClient) {
    super(http);
  }

  getAboutPage(): Subject<IContent[]> {
    const data = new Subject<any>();
    this.http.get(`${this.apiEndpoint}/contents`, this.httpOptions)
      .subscribe(
        (res: IContent[]) => data.next(res),
        (err) => console.error(err)
      );
    return data;
  }
}
