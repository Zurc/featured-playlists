import { createSelector } from '@ngrx/store';
import { PlayListState } from '@features/playlist/playlist.model';

export interface AppState {
  featuredPlaylists: PlayListState;
  loading: boolean;
  error: boolean;
}

export const selectPlaylists = (state: PlayListState) => state;

export const loadPlaylists = createSelector(
  selectPlaylists,
  (state: PlayListState) => state
);

export const isLoadingPlaylists = createSelector(
  selectPlaylists,
  (state: PlayListState) => state.loading
);

export const loadingPlaylistsHasError = createSelector(
  selectPlaylists,
  (state: PlayListState) => state.error
);
