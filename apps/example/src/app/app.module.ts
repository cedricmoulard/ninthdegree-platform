import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgrxExceptionsModule} from "@ne/ngrx-exceptions";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { ExceptionsUiModule } from '@ninthdegree/exceptions-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
    NgrxExceptionsModule,
    ExceptionsUiModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
