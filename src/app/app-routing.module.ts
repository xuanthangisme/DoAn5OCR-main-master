import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FileNotFoundComponent } from './shared/file-not-found/file-not-found.component';
import { AuthGuard } from './lib/auth.guard';
import { HomePageComponent } from './home/home.page';


const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
     canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: FileNotFoundComponent,
  },
];
@NgModule({
  imports: [

    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true, relativeLinkResolution: 'legacy'  }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
