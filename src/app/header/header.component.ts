import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = "https://www.themealdb.com/api/json/v1/1/"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  items: Item[] = [new Item("Categories", "Category"), new Item("Areas", "Area"), new Item("Ingredients", "Ingredient")];
  subItems: any[] 
  isCollapsed = false;
  selectedSubMenu = '';

  constructor(private http: HttpClient){}

  ngOnInit(){
    for(let i = 0; i < this.items.length; i++){
      this.items[i].getSubItems(this.http)
    }
  }

  toggleMenu(){
    this.isCollapsed = !this.isCollapsed;
  }

  toggleSubMenu(selected: string){
    if(this.selectedSubMenu===selected) this.selectedSubMenu = ""
    else this.selectedSubMenu = selected
  }


}

class Item{
  subItems: string[] = []
  alias: string
  constructor(
    public name: string, public apiName
  ){
    this.alias = this.name[0].toLowerCase()
  }

  getSubItems(http: HttpClient){
    http.get(baseUrl + "list.php?"+this.alias+"=list").subscribe((res: any)=>{
      this.subItems = res.meals.map((item) =>  item["str" + this.apiName])
      this.subItems.sort()
    })
  }
}
