import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { PlaylistComponent } from './playlist.component';
import { PlaylistModule } from './playlist.module';
import { CrudState } from '@shared/models/crud-state.model';
import { SharedModule } from '@shared/shared.module';
import { Playlist } from './playlist.model';

export type PlayListState = CrudState<PlayListState>;

describe('PlaylistComponent', () => {
  let component: PlaylistComponent;
  let fixture: ComponentFixture<PlaylistComponent>;

  beforeEach(async () => {
    const initialState = {
      featuredPlaylists: {
        name: '',
        content: [],
      },
      loading: false,
      error: false,
    } as PlayListState;

    await TestBed.configureTestingModule({
      declarations: [PlaylistComponent],
      imports: [PlaylistModule, SharedModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
