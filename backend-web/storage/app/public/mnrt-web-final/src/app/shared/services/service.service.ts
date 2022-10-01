import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient, private router: Router) { }
  //Check if user login
  userinfo: BehaviorSubject<any> = new BehaviorSubject(false);

  private handleError(errorResponse: HttpErrorResponse){
    return throwError(errorResponse.error); 
  }


  getUserData(data: any): Observable <any>{
    return this.httpClient.post( environment.baseURL+'api/login',data).pipe(catchError(this.handleError));;
  }

  saveUserData(result:any){
    localStorage.setItem("token", result.token);
    localStorage.setItem("user", result.user.name);

    const data = {
      token: result.token,
      user: result.user.name
    }

    this.userinfo.next(data);

  }

  //check if user is authenticated
  isAuthenticated(): boolean{
    let token = localStorage.getItem("token");
    if(token){
      return true;
    }
    else{
      return false;
    }
    
  }

  //logout
  logout() { 
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    console.log('localstorage remove access_token...');
    this.router.navigate(['/cms']);
  }

  registerUser(data: any): Observable <any>{
    return this.httpClient.post( environment.baseURL+'api/register',data).pipe(catchError(this.handleError));
  }

  //getLeaders
  getLeaderById(id:any): Observable<any> { 
    return this.httpClient.get(environment.baseURL + 'api/leader/'+id).pipe(catchError(this.handleError));
  }

  //getNews
  getNews(): Observable<any> { 
    return this.httpClient.get(environment.baseURL + 'api/news').pipe(catchError(this.handleError));
  }

  //getNews
  getNewsById(id:any): Observable<any> { 
    return this.httpClient.get(environment.baseURL + 'api/news/'+id).pipe(catchError(this.handleError));
  }

}
