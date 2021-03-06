import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  ingredients:Ingredient[]=[
    {name:"Ingredient1",amount:100},
    {name:"Ingredient2",amount:300},
    {name:"Ingredient5",amount:350},
    {name:"Ingredient6",amount:20},
  ];
  constructor() { }

  ngOnInit() {
  }

}
