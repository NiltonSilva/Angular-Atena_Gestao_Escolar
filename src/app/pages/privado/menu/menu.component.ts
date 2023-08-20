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
    let target: any = event.currentTarget;
    let arrow: any = target?.children[0]?.children[2]?.firstChild

    target.children[1]?.classList.toggle('show');

    if (target?.children[1]?.classList.contains('show')) {
      arrow.style.transform = "rotate(90deg)";
      arrow.style.transition = "0.3";
    } else {
      arrow.style.transform = "rotate(0deg)";
      arrow.style.transition = "0.3s";
    }
    this.encolherTodosOsSubMenus(event);

  }

  encolherTodosOsSubMenus(event: Event) {
    let target: any = event.currentTarget;
    let menu: any = target.parentElement.children;
    let listaMenu: any = [...menu];

    for (let i = 0; i < listaMenu.length; i++) {
      if (listaMenu[i]?.children[1]?.classList.contains('show')) {
        console.log('oi')
      } else {
        listaMenu[i]?.children[1]?.classList.add('none')
      }
    }
  }

}
