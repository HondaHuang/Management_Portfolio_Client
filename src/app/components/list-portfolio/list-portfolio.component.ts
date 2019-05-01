import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/shared_service/portfolio.service';
import { Router } from '@angular/router';
import { Portfolio } from 'src/app/classes/portfolio';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-list-portfolio',
  templateUrl: './list-portfolio.component.html',
  styleUrls: ['./list-portfolio.component.css']
})
export class ListPortfolioComponent implements OnInit {

addPortfolioForm: FormGroup;

  public portfolios:Portfolio[];

  constructor(private formBuilder: FormBuilder, private _service:PortfolioService, private _router:Router) { }

  ngOnInit() {
    this._service.getPortfolios().subscribe((res:any[])=> {
      console.log(res);
      this.portfolios = res;
    })
  }

  viewProject(portfolio) {
    this._service.setter(portfolio);
    this._router.navigate(['/project']);
  }

  deletePortfolio(portfolio) {
    this._service.deletePortfolio(portfolio.id)
      .subscribe((data)=> {
        this.portfolios.splice(this.portfolios.indexOf(portfolio),1);
    }, (error)=> {
      console.log(error);
    });
  }

}
