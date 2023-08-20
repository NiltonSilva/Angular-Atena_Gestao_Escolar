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
    this.encolherOuExpandirSubMenu(event);
    if (this.iconeSeta == "angle-right-light") {
      return this.iconeSeta = "angle-down-light";
    } else {
      return this.iconeSeta = "angle-right-light"
    }

  }

  encolherOuExpandirSubMenu(event: Event) {
    this.encolherTodosOsSubMenus(event);

    let target: any = event.currentTarget;
    target.children[1]?.classList.toggle('show');
  }

  encolherTodosOsSubMenus(event: Event) {

    let localCLique: any = event.currentTarget;
    let menu: any = localCLique.parentElement.children;
    let listaMenu: any = [...menu];

    for (let i = 0; i < listaMenu.length; i++) {
      if (listaMenu[i]?.children[1]) {
        listaMenu[i]?.children[1].classList.add('none');
      }
    }
  }

}
