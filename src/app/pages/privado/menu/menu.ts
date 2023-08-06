export interface IMenuBaseItem {
  title: string;
  svgIcon?: string;
  source?: string;
  open?: boolean;
}

export interface IMenuHeadItem extends IMenuBaseItem {
  subMenus?: MenuItem[];
  subMenusInterno?: MenuItem[];
}

// export enum EMenuType {
//   CLIENTE = 'CLIENTE',
//   ADMIN = 'ADMIN'
// }

export type MenuItem = IMenuHeadItem;

export interface IMenu {
  // typeMenu: EMenuType;
  itens: MenuItem[];
}

export const appMenu: IMenu = {
  // typeMenu: EMenuType.CLIENTE,
  itens: [
    {
      title: 'Home',
      svgIcon: './../../../../assets/icones/house-light.svg',
    },
    {
      title: 'Alunos',
      svgIcon: './../../../../assets/icones/person-light.svg',
      open: true
    },
    {
      title: 'Professores',
      svgIcon: './../../../../assets/icones/person-chalkboard-light.svg',
      open: true
    },
    {
      title: 'Biblioteca',
      svgIcon: './../../../../assets/icones/books-light.svg',
    },
    {
      title: 'Financeiro',
      svgIcon: './../../../../assets/icones/brazilian-real-sign-regular.svg',
      open: true
    },
    {
      title: 'Séries',
      svgIcon: './../../../../assets/icones/screen-users-light.svg',
      open: true
    },
    {
      title: 'Funcionários',
      svgIcon: './../../../../assets/icones/user-helmet-safety-light.svg',
      open: true
    },
    {
      title: 'Configurações',
      svgIcon: './../../../../assets/icones/gears-light.svg',
      open: true
    }
  ]
};
