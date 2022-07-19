import {Inject, Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class SessionStorageService {

  constructor(@Inject(Window) private window: Window) {
  }

  setToken(token: string){
    sessionStorage.setItem('token', token);
  }

  getToken () {
    sessionStorage.getItem('token');
  }

  deleteToken () {
    sessionStorage.removeItem('token');
  }
}
