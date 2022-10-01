import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }

  private handleError(errorResponse: HttpErrorResponse){
    return throwError(errorResponse.error); 
  }


  getLeaderById(id:any): Observable<any> { 
    return this.httpClient.get(environment.baseURL + 'api/leader/'+id).pipe(catchError(this.handleError));
  }

 


}
