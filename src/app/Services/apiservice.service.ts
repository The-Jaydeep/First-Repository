import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private ht:HttpClient) { }
  getData(n:number):Observable<any>{
    return this.ht.get(`https://jsonplaceholder.typicode.com/post/${n}`).pipe(
      catchError(this.handle));
  }
  private handle(errore:HttpErrorResponse){
    alert("Data Not found")
    return throwError(errore.message)
  }
}
