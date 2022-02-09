import { HttpErrorResponse } from '@angular/common/http';

export interface Playlist {
  id: string;
  kind: string;
  name: string;
  url: string;
  curator_name: string;
  artwork: string;
}

export interface PlayListState {
  featuredPlaylists: {
    name: string;
    content: Playlist[];
  };
  loading: boolean;
  error: boolean;
}
