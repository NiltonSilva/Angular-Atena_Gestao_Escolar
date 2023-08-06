import { Component, OnInit } from '@angular/core';
import { IMenu, appMenu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  appMenu: IMenu = appMenu;

  constructor() { }

  ngOnInit(): void { }

}
