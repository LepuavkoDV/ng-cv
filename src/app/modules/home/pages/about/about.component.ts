import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AboutState } from '../../../../core/store/reducers/about.reducer';
import { AboutActionTypes } from '../../../../core/store/actions/about.actions';
import { Observable } from 'rxjs';
import { IContent } from '../../../../shared/models/icontent';
import { selectAbout, selectHeadline, selectLookingFor } from '../../../../core/store/selectors/about.selectors';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about$: Observable<IContent>;
  headline$: Observable<IContent>;
  lookingFor$: Observable<IContent>;

  constructor(private store: Store<AboutState>) { }

  ngOnInit(): void {
    this.store.dispatch({ type: AboutActionTypes.loadAbouts });
    this.about$ = this.store.select(selectAbout);
    this.headline$ = this.store.select(selectHeadline);
    this.lookingFor$ = this.store.select(selectLookingFor);
  }

}
