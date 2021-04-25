import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class SkillsService extends CoreService {

  constructor(public http: HttpClient) {
    super(http);
  }

  getSkills() {}
}
