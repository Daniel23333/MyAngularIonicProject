import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class RestProvider {

  private apiUrl = 'https://api.nal.usda.gov/ndb/reports/?ndbno=01009&type=b&format=json&api_key=ylOCiNeHurqTR8p4AqpKQj2F1muB7x0F2yQeQbb9';
  private apiUrlLists = 'https://api.nal.usda.gov/ndb/list?format=json&lt=f&sort=n&api_key=ylOCiNeHurqTR8p4AqpKQj2F1muB7x0F2yQeQbb9';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getReports(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getReportsLists(): Observable<any> {
    return this.http.get(this.apiUrlLists).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getFoods(foodName): Observable<any> {
    return this.http.get(
        'https://api.nal.usda.gov/ndb/search/?format=json&q=' + foodName + '&sort=n&max=25&offset=0&api_key=ylOCiNeHurqTR8p4AqpKQj2F1muB7x0F2yQeQbb9'
      ).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
