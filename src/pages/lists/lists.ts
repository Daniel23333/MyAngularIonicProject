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
    this.getReportsLists();
  }

  getReportsLists() {
    this.rest.getReportsLists()
       .subscribe(
         reports => this.reports = reports.list.item,
         error =>  this.errorMessage = <any>error
       );
  }

}
