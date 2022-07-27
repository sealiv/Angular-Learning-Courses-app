import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of, tap} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {AuthorsService} from "../../services/authors.service";
import {
  requestAddAuthor, requestAddAuthorFail,
  requestAddAuthorSuccess,
  requestAuthors,
  requestAuthorsFail,
  requestAuthorsSuccess
} from "./authors.actions";

@Injectable()
export class AuthorsEffects {

  getAuthors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestAuthors),
      mergeMap(() => this.authorsService.getAllAuthors()
        .pipe(
          map(authors => (requestAuthorsSuccess({ authors }) )),
          catchError(() => of(requestAuthorsFail({ errorMessage: 'Authors not found.' })))
        )
      )
    )
  );

  addAuthor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestAddAuthor),
      mergeMap(action => of(action.author)
        .pipe(
          tap(() => this.authorsService.create(action.author)),
          map(author => (requestAddAuthorSuccess({ author }))),
          catchError(() => of(requestAddAuthorFail(
            { errorMessage: 'Author with name=' + action.author.name + ' not created.'})))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authorsService: AuthorsService,
  ) {}
}
