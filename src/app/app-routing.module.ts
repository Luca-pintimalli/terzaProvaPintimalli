import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestGuard } from './auth/GUARD/guest.guard';
import { AuthGuard } from './auth/GUARD/auth.guard';

const routes: Routes = [{ path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
                        { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
                        canActivate: [GuestGuard],
                        canActivateChild:[GuestGuard],
                      
                      }, 
                        { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
                         canActivate:[AuthGuard],
                        canActivateChild:[AuthGuard] },
                        { path: 'movies', loadChildren: () => import('./pages/movies/movies.module').then(m => m.MoviesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
