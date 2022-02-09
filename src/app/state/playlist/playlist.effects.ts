import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as playlistActions from './playlist.actions';
import { PlaylistService } from './playlist.service';

@Injectable()
export class PlaylistEffects {
  loadPlaylists$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(playlistActions.loadPlaylists),
      switchMap((action) =>
        this.playListService.getAll().pipe(
          map((playlist) => playlistActions.loadPlaylistsSuccess({ playlist })),
          catchError((error) =>
            of(playlistActions.loadPlaylistsFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private playListService: PlaylistService
  ) {}
}
