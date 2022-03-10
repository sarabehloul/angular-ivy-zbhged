import {Component} from "@angular/core"
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

const baseUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="

@Component({
  selector: "meal-app",
  templateUrl: "./meal.component.html"
})
export class MealComponent{

  meal: any
  ingredients: string[] = []
  measures: string[] = []
  instructions: string[] = []
  constructor(private http: HttpClient, private route: ActivatedRoute){
    this.route.params.subscribe((params)=>{
      this.http.get(baseUrl + params.id).subscribe((res: any)=>{
       this.meal = res.meals[0]
       this.instructions = this.meal.strInstructions.split('.')
       this.instructions.pop()
       for(let entry in this.meal){
         if(entry.startsWith('strIngredient') && this.meal[entry]) this.ingredients.push(this.meal[entry])
         else if(entry.startsWith('strMeasure') && this.meal[entry]) this.measures.push(this.meal[entry])
       }
      })
    })
  }
}