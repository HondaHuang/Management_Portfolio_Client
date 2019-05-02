import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { PortfolioService } from "../../shared_service/portfolio.service";
import { Portfolio } from 'src/app/classes/portfolio';
import { Project } from 'src/app/classes/project';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  public portfolios: Portfolio;
  public project: Project;
  
  constructor(private formBuilder: FormBuilder, private router: Router, private portfolioService: PortfolioService) { }

  addProjectForm: FormGroup;

  ngOnInit() {

    this.portfolios = this.portfolioService.getter();
    this.project = this.portfolioService.getterProject();
    this.addProjectForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      type: ['', Validators.required],
      start: ['', Validators.required],
      end: ['', Validators.required],
      duration: ['', Validators.required],
      status: ['', Validators.required],
      methodology: ['', Validators.required],
      description: ['', Validators.required],
      tools: ['', Validators.required],
      pm: ['', Validators.required],
      dm: ['', Validators.required],
      client: ['', Validators.required],
      budget: ['', Validators.required],
      effort: ['', Validators.required]
    });
  }



  onSubmit() {
    if (this.project.id == undefined) {
      this.portfolioService.createProject(this.portfolios, this.addProjectForm.value)
        .subscribe(data => {
          this.router.navigate(['/project']);
        }, (error) => {
          console.log(error);
        });
    } else {
      this.portfolioService.updateProject(this.project).subscribe(data => {
        this.router.navigate(['/project']);
      });
    }

  }

}
