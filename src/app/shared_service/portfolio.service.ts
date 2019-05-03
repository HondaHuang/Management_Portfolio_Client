import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Portfolio } from '../classes/portfolio';
import { Project } from '../classes/project';
import { ClientPOC } from '../classes/clientpoc';
import { Consultant } from '../classes/consultant';

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
  public clientpoc = new ClientPOC();
  public consultant = new Consultant();

  constructor(private _http: HttpClient) { }


  getPortfolios() {
    return this._http.get(this.baseUrl + '/portfolios', options)
  }

  createPortfolio(portfolio: Portfolio) {
    console.log(portfolio);
    return this._http.post(this.baseUrl + '/portfolio', JSON.stringify(portfolio), options);
  }

  createProject(portfolio: Portfolio, project: Project) {
    // console.log(portfolio.id)
    // console.log(portfolio.owner)
    // console.log(portfolio.projects)
    // console.log("~~~~~~~~~~~~")
    // console.log(project)
    portfolio.projects.push(project);
    return this._http.put(this.baseUrl + '/portfolioproject', JSON.stringify(portfolio), options);
  }

  updatePortfolio(portfolio: Portfolio) {
    return this._http.put(this.baseUrl + '/portfolio', JSON.stringify(portfolio), options);
  }

  updateProject(project: Project) {
    return this._http.put(this.baseUrl + '/project', JSON.stringify(project), options);
  }

  deletePortfolio(id: Number) {
    return this._http.delete(this.baseUrl + '/portfolio/' + id, options);
  }

  deleteProject(id: Number) {
    return this._http.delete(this.baseUrl + '/project/' + id, options);
  }

  removeClientPOC(project: Project, clientpoc: ClientPOC) {
    project.clientPOCs.splice(project.clientPOCs.indexOf(clientpoc), 1);
    return this._http.put(this.baseUrl + '/project', JSON.stringify(project), options);
  }

  removeConsultant(project: Project, consultant: Consultant) {
    project.consultants.splice(project.consultants.indexOf(consultant), 1);
    return this._http.put(this.baseUrl + '/project', JSON.stringify(project), options);
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

  setterClientpoc(clientpoc: ClientPOC) {
    this.clientpoc = clientpoc;
  }

  getterClientpoc() {
    return this.clientpoc;
  }

  setterConsultant(consultant: Consultant) {
    this.consultant = consultant;
  }

  getterConsultant() {
    return this.consultant;
  }

}