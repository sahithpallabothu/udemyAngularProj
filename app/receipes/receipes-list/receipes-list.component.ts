import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipe.model';

@Component({
  selector: 'app-receipes-list',
  templateUrl: './receipes-list.component.html',
  styleUrls: ['./receipes-list.component.css']
})
export class ReceipesListComponent implements OnInit {

  receipes:Receipe[]=[
    {name:"Test",description:"Super Dish",imagePath:"https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_960,h_1200/k%2FPhoto%2FRecipes%2F2019-11-recipe-easy-sheet-pan-nachos%2F2019-10-21_Kitchn89063_Easy-Sheet-Pan-Chicken-Nachos"},
    new Receipe("Test2","Dish 2","https://cookieandkate.com/images/2019/12/butternut-squash-wild-rice-recipe-2-2-768x1154.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
