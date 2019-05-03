import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/classes/project';
import { ClientPOC } from 'src/app/classes/clientpoc';
import { PortfolioService } from 'src/app/shared_service/portfolio.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-clientpoc',
  templateUrl: './create-clientpoc.component.html',
  styleUrls: ['./create-clientpoc.component.css']
})
export class CreateClientpocComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private httpService: HttpClient, private _service: PortfolioService, private _router: Router) { }

  public projects: Project;
  public addclientpoc: ClientPOC;
  public clientpocs: ClientPOC[];

  form: FormGroup;

  ngOnInit() {
    this.form = this.formBuilder.group({
    });
    this.projects = this._service.getterProject();
    this.httpService.get('http://localhost:8400/api/unassignedClientpocs').subscribe(
      data => {
        this.clientpocs = data as ClientPOC[];
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    )
  }

  onSubmit() {
    this.projects.clientPOCs.push(this.addclientpoc);
    this._service.updateProject(this.projects).subscribe(data => {
      this._router.navigate(['/project']);
    });
  }

}
