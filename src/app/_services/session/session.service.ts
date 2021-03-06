import { Injectable } from '@angular/core';
import { Session } from './session';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})

export class SessionService {

  endpoint: string = 'https://magits-backend.herokuapp.com/session';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Add session
  AddSession(data: any): Observable<any> {
    console.log("from service");
    console.log(data);
    let API_URL = `${this.endpoint}/add-session`;
    return this.http.post(API_URL, data)
      .pipe(
        map((res: Response) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  // Get all Sessions
  GetSessions() {
    return this.http.get(`${this.endpoint}`);
  }

  // Get Session
  GetSession(id): Observable<any> {
    let API_URL = `${this.endpoint}/read-session/${id}`;
    return this.http.get(API_URL, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  //Get Sessions by Course
  GetSessionsByCourse(data: any): Observable<any> {
    // console.log("sessionApi")
    // console.log(data);
  let API_URL = `${this.endpoint}/get-session-by-course`;
  return this.http.post(API_URL, data)
    .pipe(
      catchError(this.errorMgmt)
    )
  }

  //Get current day Sessions by Course
  GetCurrentDaySessionsByCourse(data: any): Observable<any> {
    let API_URL = `${this.endpoint}/get-current-day-session-by-course`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  //Get all feedback by session
  ViewSessionFeedback(data: any): Observable<any> {
    let API_URL = `${this.endpoint}/get-feedback-by-session`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  //Check in Member to a Session (reads property 'subject' which is the member ID)
  CheckInMember(data: any): Observable<any> {
    let API_URL = `${this.endpoint}/session-check-in-member`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  //Close session
  CloseSession(id): Observable<any> {
    let API_URL = `${this.endpoint}/close-session/${id}`;
    return this.http.put(API_URL, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  //View Session Attendance Summary
  ViewSessionAttendance(id): Observable<any> {
    let API_URL = `${this.endpoint}/view-session-attendance/${id}`;
    return this.http.get(API_URL, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Update Session
  UpdateSession(id, data: Session): Observable<any> {
    let API_URL = `${this.endpoint}/update/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete Session
  DeleteSession(id): Observable<any> {
    var API_URL = `${this.endpoint}/delete-session/${id}`;
    return this.http.delete(API_URL).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
