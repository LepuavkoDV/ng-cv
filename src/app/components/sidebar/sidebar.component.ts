import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
   navLinks = [
    {
      title: 'О себе',
      to: '/'
    },
    {
      title: 'Навыки',
      to: 'skills'
    },
    // {
    // title: 'Мои работы',
    // to: 'my-works'
    // },
    {
      title: 'Обратная связь',
      to: 'contact-me'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
