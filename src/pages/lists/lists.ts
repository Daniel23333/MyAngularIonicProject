import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html'
})
export class ListsPage {

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
