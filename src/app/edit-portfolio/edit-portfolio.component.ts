import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../classes/portfolio';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PortfolioService } from '../shared_service/portfolio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.css']
})
export class EditPortfolioComponent implements OnInit {

  public portfolio: Portfolio;

  constructor(private formBuilder: FormBuilder, private _service: PortfolioService, private _router: Router) { }

  addPortfolioForm: FormGroup;

  ngOnInit() {
    this.portfolio = this._service.getter();
    this.addPortfolioForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      budget: ['', Validators.required],
      owner: ['', Validators.required]
    });
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
