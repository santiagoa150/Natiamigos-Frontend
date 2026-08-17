import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'example1',
    loadComponent: () =>
      import('./context/home/ui/page/example1/example1.page').then((m) => m.Example1),
  },
  {
    path: 'example2',
    loadComponent: () =>
      import('./context/home/ui/page/example2/example2.page').then((m) => m.Example2),
  },
  { path: '', redirectTo: 'example1', pathMatch: 'full' },
];
