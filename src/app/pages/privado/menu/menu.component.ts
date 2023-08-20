import { Component, Input, OnInit } from '@angular/core';
import { IMenu, appMenu } from './menu';
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  appMenu: IMenu = appMenu;
  iconeSeta: string = 'angle-right-light';

  constructor() { }

  ngOnInit(): void { }

  mudarIconeSeta(event: Event): string {
    if (this.iconeSeta == "angle-right-light") {
      return this.iconeSeta = "angle-down-light";
    } else {
      return this.iconeSeta = "angle-right-light"
    }
  }




}
