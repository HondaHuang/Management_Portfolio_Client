import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/classes/portfolio';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { PortfolioService } from 'src/app/shared_service/portfolio.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.css']
})
export class EditPortfolioComponent implements OnInit {

  public portfolio: Portfolio;

  constructor(private _service: PortfolioService, private _router: Router) { }

  form = new FormGroup({

    name: new FormControl('', Validators.required),
    budget: new FormControl('', Validators.required),
    owner: new FormControl('', Validators.required)
});


  ngOnInit() {
    this.portfolio = this._service.getter();
  }

  onSubmit() {
    if (this.portfolio.id == undefined) {
      this._service.createPortfolio(this.portfolio).subscribe(data => {
        this._router.navigate(['/']);
      }, (error) => {
        console.log(error);
      });
    } else {
      this._service.updatePortfolio(this.portfolio).subscribe(data => {
        this._router.navigate(['/']);
      });
    }
  }

}
