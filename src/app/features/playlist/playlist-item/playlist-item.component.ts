import { Component, Input } from '@angular/core';
import { Playlist } from '../playlist.model';

@Component({
  selector: 'app-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.scss'],
})
export class PlaylistItemComponent {
  @Input() playlist: Playlist | undefined;
}
