import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistComponent } from './playlist.component';
import { MatCardModule } from '@angular/material/card';
import { PlaylistItemComponent } from './playlist-item/playlist-item.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [PlaylistComponent, PlaylistItemComponent],
  imports: [CommonModule, PlaylistRoutingModule, MatCardModule, SharedModule],
})
export class PlaylistModule {}
