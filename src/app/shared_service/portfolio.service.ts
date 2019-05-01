import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Portfolio } from '../classes/portfolio';
import { Project } from '../classes/project';

let headers = new HttpHeaders().set('Content-Type', 'application/json');
let options = {
  headers: headers
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private baseUrl: string = 'http://localhost:8400/api';
  public portfolio = new Portfolio();
  public project = new Project();

  constructor(private _http: HttpClient) { }


  getPortfolios() {
    return this._http.get(this.baseUrl + '/portfolios', options)
  }

  createProject(portfolio: Portfolio, project: Project) {
    console.log(portfolio.id)
    console.log(portfolio.owner)
    console.log(portfolio.projects)
    console.log("~~~~~~~~~~~~")
    console.log(project)
    portfolio.projects.push(project);
    return this._http.put(this.baseUrl + '/portfolioproject', JSON.stringify(portfolio), options)
  }


  deletePortfolio(id:Number) {
    return this._http.delete(this.baseUrl+'/portfolio/'+id,options);
  }

  deleteProject(id:Number) {
    return this._http.delete(this.baseUrl+'/project/'+id,options);
  }

  setter(portfolio: Portfolio) {
    this.portfolio = portfolio;
  }

  getter() {
    return this.portfolio;
  }

  setterProject(project: Project) {
    this.project = project;
  }

  getterProject() {
    return this.project;
  }

}