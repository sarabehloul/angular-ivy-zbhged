import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {CategoriesComponent} from "./categories/categories.component"
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AreasComponent } from './areas/areas.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { MealComponent } from './meal/meal.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, NgbModule,  AppRoutingModule],
  declarations: [ AppComponent, HeaderComponent, HomeComponent, CategoriesComponent, AreasComponent, IngredientsComponent, MealComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
