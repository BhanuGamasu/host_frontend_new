import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(private http: HttpClient) { }

  sendData(): Observable<any>{
    return this.http.get('http://localhost:3200/test')
  }
}
