import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Portfolio } from '../classes/portfolio';

let headers = new HttpHeaders().set('Content-Type','application/json');
let options ={
  headers:headers
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private baseUrl:string='http://localhost:8400/api';
  public portfolio = new Portfolio();

  constructor(private _http:HttpClient) { }


  getPortfolios() {
    return this._http.get(this.baseUrl+'/portfolios',options)
  }
}
