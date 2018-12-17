import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { User } from '../model/User';
import { Authentication } from '../model/Authentication';
import { Profile } from '../model/Profile';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient,private router: Router, private cookieService: CookieService) { }

  private Url  = 'http://localhost:3000/api/';

  newdata: any;

  update_profile(profile: Profile): Observable<User> {
    this.newdata = { "profile" : profile };
    return this.http.patch<User>(this.Url+"profiles/"+profile.id,this.newdata,httpOptions)
    .pipe(
      tap( _ => this.router.navigate(['']))
    );
  }

  getProfile(id: number): Observable<User> {
    this.newdata = { "id" : id };
    return this.http.get<User>(this.Url+"users/"+id,httpOptions)
          .pipe(
            tap( _ => console.log("Fetched Profile")),
            catchError(this.handleError<User>('getuser()'))
          );
  }

  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    console.log(operation+" failed: "+ error.message);
    return of(result as T);
  };
}

}
