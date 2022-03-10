import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./home/home.component"
import { CategoriesComponent } from './categories/categories.component';
import {AreasComponent} from "./areas/areas.component"
import {IngredientsComponent} from "./ingredients/ingredients.component"
import {MealComponent} from './meal/meal.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'categories/:category', component: CategoriesComponent},
  {path: 'areas/:area', component: AreasComponent},
  {path: 'ingredients/:ingredient', component: IngredientsComponent},
  {path: 'meal/:id', component: MealComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }