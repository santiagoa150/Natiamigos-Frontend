import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./context/home/ui/page/home/home.page').then((m) => m.Home),
  },
];
