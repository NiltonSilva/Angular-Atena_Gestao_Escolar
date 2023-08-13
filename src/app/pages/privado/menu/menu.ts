export interface IMenuBaseItem {
  id?: number;
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
      id: 1,
      title: 'Home',
      svgIcon: './../../../../assets/icones/house-light.svg',
      source: '/home'
    },
    {
      id: 2,
      title: 'Alunos',
      svgIcon: './../../../../assets/icones/person-light.svg',
      source: '/novoAluno',
      open: true,
    },
    {
      id: 3,
      title: 'Professores',
      svgIcon: './../../../../assets/icones/person-chalkboard-light.svg',
      source: '/novoProfessor',
      open: true
    },
    {
      id: 4,
      title: 'Biblioteca',
      svgIcon: './../../../../assets/icones/books-light.svg',
      source: 'biblioteca'
    },
    {
      id: 5,
      title: 'Financeiro',
      svgIcon: './../../../../assets/icones/brazilian-real-sign-regular.svg',
      open: true
    },
    {
      id: 6,
      title: 'Séries',
      svgIcon: './../../../../assets/icones/screen-users-light.svg',
      open: true
    },
    {
      id: 7,
      title: 'Funcionários',
      svgIcon: './../../../../assets/icones/user-helmet-safety-light.svg',
      open: true
    },
    {
      id: 8,
      title: 'Configurações',
      svgIcon: './../../../../assets/icones/gears-light.svg',
      open: true
    }
  ]
};
