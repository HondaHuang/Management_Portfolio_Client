import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/shared_service/portfolio.service';
import { Portfolio } from 'src/app/classes/portfolio';
import { Project } from 'src/app/classes/project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {

  public portfolios:Portfolio;
  public projects:Project[];

  constructor(private _service:PortfolioService, private _router:Router) { }

  ngOnInit() {
    this.portfolios = this._service.getter();
    this.projects = Object.assign([], this.portfolios.projects);
   // console.log(this.portfolios.projects);
    console.log("Projects");
    console.log(this.projects);
  }
  viewMore(project){
    this._service.setterProject(project);
    this._router.navigate(['/more'])
  }

}
