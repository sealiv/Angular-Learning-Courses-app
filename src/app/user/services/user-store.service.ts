import { Injectable } from '@angular/core';
import {Roles, User} from "../../auth/models";

const USERS: User[] = [
  {
    id: 1,
    username: 'Maria',
    email: '1',
    password: '1',
    role: Roles.admin,
  },
  {
    id: 2,
    username: 'Anatoliy',
    email: '2',
    password: '2',
    role: Roles.admin,
  },
  {
    id: 3,
    username: 'Alex',
    email: '3',
    password: '3',
    role: Roles.user,
  }
];


@Injectable({ providedIn: 'root'})
export class UserStoreService {

  constructor() { }

  getAll() {
    return USERS;
  }

  create(user: User) {
    user.id = USERS.length + 1;
    console.log('User-store.service.ts => user.id = ' + user.id);
    USERS.push(user);
  }
}
