import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthorizedGuard} from './auth/guards/authorized.guard';
import {AuthService} from './auth/services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NonAuthorizedGuard} from "./auth/guards/non-authorized.guard";
import {UserService} from "./user/services/user.service";
import {AdminGuard} from "./user/services/admin.guard";
import {UserStoreService} from "./user/services/user-store.service";
import {SessionStorageService} from "./auth/services/session-storage.service";

import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {userReducer} from "./user/store/user.reducer";
import {UserEffects} from "./user/store/user.effects";
import {effects, reducers} from "./store";

@NgModule({
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule, ReactiveFormsModule, FormsModule,
    StoreModule.forRoot({ user: userReducer}),
    EffectsModule.forRoot([UserEffects]),
    // reducers,
    effects,
  ],
  declarations: [ AppComponent ],
  providers: [
    AuthService,
    SessionStorageService,
    AuthorizedGuard,
    NonAuthorizedGuard,
    UserService,
    UserStoreService,
    AdminGuard,
    { provide: Window, useValue: window } ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
}
