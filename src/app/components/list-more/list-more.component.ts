import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/classes/project';
import { ClientPOC } from 'src/app/classes/clientpoc';
import { Consultant } from 'src/app/classes/consultant';
import { PortfolioService } from 'src/app/shared_service/portfolio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-more',
  templateUrl: './list-more.component.html',
  styleUrls: ['./list-more.component.css']
})
export class ListMoreComponent implements OnInit {

  public projects: Project;
  public clientpocs: ClientPOC[];
  public consultants: Consultant[];

  constructor(private _service: PortfolioService, private _router: Router) { }

  ngOnInit() {
    this.projects = this._service.getterProject();
    this.clientpocs = Object.assign([], this.projects.clientPOCs);
    this.consultants = Object.assign([], this.projects.consultants);
    console.log(this.projects);
  }

  createclientpoc(project) {
    this._service.setterProject(project);
    this._router.navigate(['/createclientpoc']);
  }

  removeClientPOC(project, clientpoc) {
    this._service.removeClientPOC(project, clientpoc);
    this._router.navigate(['/more']);
  }

  removeConsultant(project, consultant) {
    this._service.removeConsultant(project, consultant);
    this._router.navigate(['more']);
  }
}
