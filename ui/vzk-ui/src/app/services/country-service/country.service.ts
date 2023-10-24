import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private readonly apiUrl = 'https://restcountries.com/v2/all';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      tap(data => console.log('Countries API Response:', data)),
      catchError(error => {
        console.error('Error fetching countries:', error);
        return [];
      })
    );
  }

}
