import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AboutActionTypes } from '../../../../core/store/actions/about.actions';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch({ type: AboutActionTypes.loadAbouts });
  }

}
