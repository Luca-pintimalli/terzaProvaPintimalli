import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestGuard } from './auth/GUARD/guest.guard';
import { AuthGuard } from './auth/GUARD/auth.guard';

const routes: Routes = [{ path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },

                        { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
                        canActivate: [GuestGuard],
                        canActivateChild:[GuestGuard]}, 

                        { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
                         canActivate:[AuthGuard],
                        canActivateChild:[AuthGuard] },

                        { path: 'movies', loadChildren: () => import('./pages/movies/movies.module').then(m => m.MoviesModule),
                        canActivate:[AuthGuard],
                        canActivateChild:[AuthGuard] },

                        { path: 'utentiRegistrati', loadChildren: () => import('./pages/utenti-registrati/utenti-registrati.module').then(m => m.UtentiRegistratiModule),
                        canActivate:[AuthGuard],
                        canActivateChild:[AuthGuard]  },

                        { path: 'favoriteMovies', loadChildren: () => import('./pages/favorite-movies/favorite-movies.module').then(m => m.FavoriteMoviesModule),
                        canActivate:[AuthGuard],
                        canActivateChild:[AuthGuard]  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
