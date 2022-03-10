import {Component} from "@angular/core"
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

const baseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?a="

@Component({
  selector: "areas-app",
  templateUrl: "./areas.component.html"
})
export class AreasComponent {
    meals: any[]

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute){
    this.activatedRoute.params.subscribe(params => {
      this.http.get(baseUrl + params.area).subscribe((res: any)=>{
        this.meals = res.meals
      })
    });
  }

  onMealClick(strMeal: string){
    console.log(strMeal)
  }
}