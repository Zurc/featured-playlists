import { Action, createReducer, on } from '@ngrx/store';
import * as playlistActions from './playlist.actions';
import { CrudState } from '../../shared/models/crud-state.model';

export type PlayListState = CrudState<PlayListState>;

export const initialState: PlayListState = {};

export const _reducerSetup = createReducer(
  initialState,

  on(playlistActions.loadPlaylists, (state) => ({
    ...state,
    loading: true,
    error: false,
  })),

  on(playlistActions.loadPlaylistsSuccess, (state, action) => {
    return {
      ...state,
      playlist: action.playlist,
      loading: false,
    };
  }),

  on(playlistActions.loadPlaylistsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: true,
  }))
);

export function reducerSetup(state: PlayListState | undefined, action: Action) {
  return _reducerSetup(state, action);
}
