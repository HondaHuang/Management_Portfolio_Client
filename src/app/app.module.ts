import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListPortfolioComponent } from './components/list-portfolio/list-portfolio.component';
import { ListProjectComponent } from './components/list-project/list-project.component';
import { PortfolioService } from './shared_service/portfolio.service';
const appRoutes:Routes = [
  {path:'', component:ListPortfolioComponent},
  {path:'project', component:ListProjectComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListPortfolioComponent,
    ListProjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
