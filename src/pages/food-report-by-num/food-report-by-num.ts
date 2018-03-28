import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-food-report-by-num',
  templateUrl: 'food-report-by-num.html'
})
export class FoodReportByNumPage {

  reports: string[];
  errorMessage: string;

  constructor(public navCtrl: NavController, public rest: RestProvider) {}

  ionViewDidLoad() {
    this.getReports();
  }

  getReports() {
    this.rest.getReports()
       .subscribe(
         reports => this.reports = reports.report.food.nutrients,
         error =>  this.errorMessage = <any>error
       );
  }

}
