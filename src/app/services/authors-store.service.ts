import { Injectable } from '@angular/core';
import {Author} from "../features/models";
import {CoursesStoreService} from "./courses-store.service";

const AUTHORS: Author[] = [];

@Injectable({
  providedIn: 'root'
})
export class AuthorsStoreService {

  constructor(private coursesService: CoursesStoreService) {
    const courses = coursesService.getAll();
    for (let i = 0; i < courses.length; i++) {
      let authorNames = courses[i].authors;
      for (let j = 0; j < authorNames.length; j++) {
        if (!this.findAuthorName(authorNames[j])) {
          this.create({id: 0, name: authorNames[j]});
        }
      }
    }
  }

  findAuthorName(name: string): boolean {
    for (let i = 0; i < AUTHORS.length; i++) {
      if (AUTHORS[i].name == name) {
        return true;
      }
    }
    return false;
  }

  getAll(): Author[]{
    return AUTHORS;
  }

  create(author: Author) {
    author.id = AUTHORS.length + 1;
    AUTHORS.push(author);
  }

  delete(id: number) {
    for (let i = 0; i < AUTHORS.length; i++) {
      if (AUTHORS[i].id == id) {
        AUTHORS.splice(i, 1);
      }
    }
  }

  edit(author: Author) {
    for (let i = 0; i < AUTHORS.length; i++) {
      if (AUTHORS[i].id == author.id) {
        AUTHORS[i] = author
      }
    }
  }
}
