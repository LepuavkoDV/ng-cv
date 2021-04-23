import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './modules/home/pages/about/about.component';
import { SkillsComponent } from './modules/home/pages/skills/skills.component';
import { ContactMeComponent } from './modules/home/pages/contact-me/contact-me.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AboutState } from './core/store/reducers/about.reducer';
import { AboutEffects } from './core/store/effects/about.effects';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AboutComponent,
    SkillsComponent,
    ContactMeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    StoreModule.forRoot({
      AboutState
    }, {}),
    EffectsModule.forRoot([
      AboutEffects,
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
