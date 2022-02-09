import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '@shared/components/error.component';

const routes: Routes = [
  {
    path: 'playlist',
    loadChildren: () =>
      import('./features/playlist/playlist.module').then(
        (m) => m.PlaylistModule
      ),
  },
  {
    path: '',
    redirectTo: '/playlist',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
