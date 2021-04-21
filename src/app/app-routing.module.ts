import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';

export interface RouteV2 extends Route {
  title?: string;
}

export declare type RoutesV2 = RouteV2[];

export const routes: RoutesV2 = [
  { title: 'О себе', path: 'about', component: AboutComponent },
  { title: 'Навыки', path: 'skills', component: SkillsComponent },
  { title: 'Обратная связь', path: 'contact-me', component: ContactMeComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
