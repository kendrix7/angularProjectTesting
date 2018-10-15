import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent}
];

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
