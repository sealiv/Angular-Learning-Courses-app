import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {User, Roles} from "../../auth/models";
import {map} from "rxjs/operators";
import {UserStoreService} from "./user-store.service";

@Injectable({ providedIn: 'root'})
export class UserService {

  private name$$ = new BehaviorSubject(this.userStoreService.getAll());
  public name$ = new Observable<User>();
  public name: boolean = false;

  private isAdmin$$ = new BehaviorSubject([]);
  public isAdmin: boolean = false;

  private user = {} as User;

  constructor(@Inject(Window) private window: Window, private userStoreService: UserStoreService) {
  }

  createUser(user: User) {
    console.log('Created User: ' + user.username);
    this.userStoreService.create(user);
  }

  getUser(name: string): User {
    this.name$ = this.name$$.asObservable().pipe(
      map(users => {
        const user = users.find(user => (user.username === name));
        this.user = user != null ? user : {} as User;
        this.isAdmin = user.role === Roles.admin;
        this.isAdmin$$.value.push(this.isAdmin);
        return user;
      })
    );
    return this.user;
  }

  isUserAdmin(name: string): boolean {
    return false;
  }

  getNewId(): number {
    return this.userStoreService.getAll().length + 1;
  }

}
