import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { User } from '../model/User';
import { Authentication } from '../model/Authentication';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor( private http: HttpClient,private router: Router, private cookieService: CookieService) { }

  private Url  = 'http://localhost:3000/api/';

  newdata: any;

  getuser(): Observable<User> {
    httpOptions.headers = httpOptions.headers.set('authorization', 'Token token='+this.cookieService.get('Auth_Token'));
    return this.http.get<User>(this.Url+"user",httpOptions)
    .pipe(
      tap( _ =>
            console.log('Fetched User')
    ),
     catchError(this.handleError<User>('getuser()'))
    );
  }

    signin(auth: Authentication): Observable<User> {
    return this.http.post<User>(this.Url+"users/login", auth,httpOptions)
    .pipe(
      tap( data => {
           this.cookieService.set('Auth_Token', data.token);
           this.router.navigate(['']);
      }),
      catchError(this.handleError<User>('signin()'))
    );
  }

  signup(auth: Authentication): Observable<User>{
    this.newdata = { "user": auth };
    console.log(this.newdata);
    return this.http.post<User>(this.Url+"users",this.newdata, httpOptions)
    .pipe(
      tap( data => {
        this.cookieService.set('Auth_Token', data.token);
        this.router.navigate(['']);
      }),
      catchError(this.handleError<User>('signup()'))
    );
  }

  logout(): void {
    this.cookieService.delete('Auth_Token');
    this.router.navigate(['signin']);
  }

  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    console.log(operation+" failed: "+ error.message);
    return of(result as T);
  };
}

}
