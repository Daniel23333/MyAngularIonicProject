import { Component } from '@angular/core';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-food-report-by-name',
  templateUrl: 'food-report-by-name.html'
})
export class FoodReportByNamePage {

  foods: string[];
  errorMessage: string;
  disabledSearchButton: boolean = true;
  foodName: string;

  constructor(public rest: RestProvider) {}

  onSearchLocationWithEvent(event:Event) {
    //console.log("Complete event data value: "+ event);
    console.log("Control value: "+ (<HTMLInputElement>event.target).value);
    this.foodName = (<HTMLInputElement>event.target).value;
    this.disabledSearchButton = false;
  }

  searchFood() {
    this.rest.getFoods(this.foodName)
       .subscribe(
         (foods) => {
          if (!foods.errors) {
            this.foods = foods.list.item;
            this.errorMessage = '';
          } else {
            this.errorMessage = 'Your search resulted in zero results. Please change the food name.'
          }
         },
         error =>  this.errorMessage = <any>error
       );
  }

}
