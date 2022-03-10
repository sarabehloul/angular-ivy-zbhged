import {Component, OnInit} from "@angular/core"
import {HttpClient} from "@angular/common/http"
import { ActivatedRoute, Router } from "@angular/router"

const baseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c="


@Component({
  selector: "categories-app",
  templateUrl: "categories.component.html"
})
export class CategoriesComponent  {
  meals: any[]

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router){
    this.activatedRoute.params.subscribe(params => {
      this.http.get(baseUrl + params.category).subscribe((res: any)=>{
        this.meals = res.meals
      })
    });
  }

  onMealClick(idMeal: any){
    this.router.navigateByUrl('/meal/' + idMeal)
  }
}