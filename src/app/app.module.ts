import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { PlaylistModule } from './features/playlist/playlist.module';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PlaylistEffects } from './state/playlist/playlist.effects';
import { reducerSetup } from './state/playlist/playlist.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // angular
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // core
    CoreModule,

    // app
    AppRoutingModule,

    PlaylistModule,
    SharedModule,
    EffectsModule.forRoot([PlaylistEffects]),
    StoreModule.forRoot({ state: reducerSetup }),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
