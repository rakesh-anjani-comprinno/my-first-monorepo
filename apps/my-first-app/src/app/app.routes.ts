import { Route } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component:AppComponent,
        pathMatch:'full'
    },
    {
        path:'products',
        loadComponent: () => import('@my-first-monorepo/ui-component').then((m)=>m.UiComponentComponent),
    },
    {
        path:'button',
        loadComponent: () => import('@my-first-monorepo/feature-module').then((m)=>m.ButtonComponent),
    }
];
