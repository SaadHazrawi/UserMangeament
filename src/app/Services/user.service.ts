import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { User, UserInformation } from '../InterFace/IUser';
import { catchError, Observable, throwError } from 'rxjs';
import { ILogin } from '../InterFace/ILogin';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  private url = 'https://reqres.in/api/users';
 
    //Get User from ReqRes
    public getUsers(page: number) {
      return this.http
        .get(this.url + '?page=' + page)
        .pipe(catchError(this.handleError));
    }
//get user by id from reqres
getUser(idnumber:number):Observable<User>{
  return this.http.get<User>("https://reqres.in/api/users/"+idnumber);
}  

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token')?.toString();
  }

  login(loginInfo: ILogin): Observable<any> {
    return this.http
      .post(this.url, loginInfo)
      .pipe(catchError(this.handleError));
  }


  handleError(error: HttpErrorResponse) {
    let message: string = '';
    if (error.error instanceof ErrorEvent) {
      message = `This Error From Client Side ` + error.message;
    } else {
      message = `Error From Server` + error.message;
    }
    return throwError(() => message);
  }
}
