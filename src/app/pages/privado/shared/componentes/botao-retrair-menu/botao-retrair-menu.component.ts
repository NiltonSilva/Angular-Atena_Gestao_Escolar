import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-botao-retrair-menu',
  templateUrl: './botao-retrair-menu.component.html',
  styleUrls: ['./botao-retrair-menu.component.css']
})
export class BotaoRetrairMenuComponent {

  iconeSeta: string = 'left';

  mudarIconeSeta(): string {
    if (this.iconeSeta == 'right') {
      this.iconeSeta = 'left';
    } else {
      this.iconeSeta = 'right';
    }
    return this.iconeSeta;
  }

}
