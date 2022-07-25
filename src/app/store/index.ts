import {NgModule} from '@angular/core';
import {ActionReducerMap, StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";

interface State {}

export const reducers: ActionReducerMap<State> = [];
export const effects = [];


@NgModule({
  imports: [
    StoreModule.forRoot(reducers), EffectsModule.forRoot(effects)
  ],
})
export class StoreComponent {
}
