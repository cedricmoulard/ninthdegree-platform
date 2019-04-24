import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {EXCEPTION_FEATURE_KEY, exceptionsReducer, initialExceptionState} from "./+state/exceptions.reducer";
import {EffectsModule} from "@ngrx/effects";
import {ExceptionsEffects} from "./+state/exceptions.effects";
import {ExceptionsService} from "./exceptions.service";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(EXCEPTION_FEATURE_KEY, exceptionsReducer, {
      initialState: initialExceptionState
    }),
    EffectsModule.forFeature([ExceptionsEffects])
  ],
  providers:[ExceptionsService]
})
export class NgrxExceptionsModule {}
