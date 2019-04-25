import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/shared_service/portfolio.service';
import { Router } from '@angular/router';
import { Portfolio } from 'src/app/classes/portfolio';

@Component({
  selector: 'app-list-portfolio',
  templateUrl: './list-portfolio.component.html',
  styleUrls: ['./list-portfolio.component.css']
})
export class ListPortfolioComponent implements OnInit {

  public portfolios:Portfolio[];

  constructor(private _service:PortfolioService, private _router:Router) { }

  ngOnInit() {
    this._service.getPortfolios().subscribe((res:any[])=> {
      console.log(res);
      this.portfolios = res;
    })
  }

}
