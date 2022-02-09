import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import {
  Playlist,
  PlayListState,
} from '../../features/playlist/playlist.model';

export const loadPlaylists = createAction('[Playlists] Load Playlists');

export const loadPlaylistsSuccess = createAction(
  '[Playlists] Load Playlists Success',
  props<{
    playlist: Playlist;
  }>()
);

export const loadPlaylistsFailure = createAction(
  '[Playlists] Load Playlists Failure',
  props<{
    error: boolean;
  }>()
);
