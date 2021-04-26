import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { CoreService } from './core.service';
import { ISkill } from '../../shared/models/iskill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService extends CoreService {

  constructor(public http: HttpClient) {
    super(http);
  }

  getSkills(): Subject<ISkill[]> {
    const data = new Subject<any>();
    this.http.get(`${this.apiEndpoint}/skills`, this.httpOptions)
      .subscribe(
        (res: ISkill[]) => data.next(res),
        (err) => console.error(err),
      );
    return data;
  }
}
