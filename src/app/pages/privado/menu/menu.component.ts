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

  encolherOuExpandirSubMenu(event: Event) {
    this.encolherTodosOsSubMenus(event);

    let target: any = event.currentTarget;
    let arrow: any = target?.children[0]?.children[2]?.firstChild

    target.children[1]?.classList.toggle('show');

    if (target.children[1]?.classList.contains('show')) {
      arrow.style.transform = "rotate(90deg)";
    } else {
      arrow.style.transform = "rotate(0deg)";
    }
  }

  encolherTodosOsSubMenus(event: Event) {

    let target: any = event.currentTarget;
    let menu: any = target.parentElement.children;
    let listaMenu: any = [...menu];

    for (let i = 0; i < listaMenu.length; i++) {
      if (listaMenu[i]?.children[1]) {
        listaMenu[i]?.children[1].classList.add('none');
      }
    }
  }

}
