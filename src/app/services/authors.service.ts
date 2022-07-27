import { Injectable } from '@angular/core';
import {AuthorsStoreService} from "./authors-store.service";
import {Author} from "../features/models";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private authorsStoreService: AuthorsStoreService) { }

  authors$$ = new BehaviorSubject(this.authorsStoreService.getAll());

  getAllAuthors(): Observable<Author[]> {
    return this.authors$$.asObservable();
  }

  // getAll(): Author[]{
  //   return this.authorsStoreService.getAll();
  // }

  create(author: Author) {
    this.authorsStoreService.create(author);
  }

  delete(id: number) {
    this.authorsStoreService.delete(id);
  }

  edit(author: Author) {
    this.authorsStoreService.edit(author);
  }
}
