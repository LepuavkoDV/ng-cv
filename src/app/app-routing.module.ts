import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AboutComponent } from './modules/home/pages/about/about.component';
import { SkillsComponent } from './modules/home/pages/skills/skills.component';
import { ContactMeComponent } from './modules/home/pages/contact-me/contact-me.component';

export interface RouteV2 extends Route {
  title?: string;
}

export declare type RoutesV2 = RouteV2[];

export const routes: RoutesV2 = [
  { title: 'О себе', path: 'about', component: AboutComponent },
  { title: 'Навыки', path: 'skills', component: SkillsComponent },
  { title: 'Обратная связь', path: 'contact-me', component: ContactMeComponent },
  { path: '', redirectTo: 'about', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
