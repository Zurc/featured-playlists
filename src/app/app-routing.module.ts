import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/playlist',
    pathMatch: 'full',
  },
  {
    path: 'playlist',
    loadChildren: () =>
      import('./features/playlist/playlist.module').then(
        (m) => m.PlaylistModule
      ),
  },
  {
    path: '**',
    redirectTo: '/playlist',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
