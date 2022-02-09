import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as playlistActions from '@state/playlist/playlist.actions';
import {
  loadPlaylists,
  isLoadingPlaylists,
  loadingPlaylistsHasError,
} from '@state/playlist/playlist.selectors';
import { PlayListState } from './playlist.model';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {
  playlists$: Observable<any> | undefined;
  playlistsIsLoading$: Observable<boolean>;
  playlistsHasError$: Observable<boolean>;

  constructor(private store$: Store<PlayListState>) {
    this.playlists$ = this.store$.select(loadPlaylists);
    this.playlistsIsLoading$ = this.store$.select(isLoadingPlaylists);
    this.playlistsHasError$ = this.store$.select(loadingPlaylistsHasError);
  }

  ngOnInit(): void {
    this.store$.dispatch(playlistActions.loadPlaylists());
  }
}
