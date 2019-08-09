import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataModel } from './data-medel';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private _url: string = "/assets/data.json"

  constructor( private http: HttpClient) { }

  getData(): Observable<DataModel[]> {
    return this.http.get<DataModel[]>(this._url);
  }
}
