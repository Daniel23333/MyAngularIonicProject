import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class RestProvider {

  private apiUrl = 'https://api.nal.usda.gov/ndb/reports/?ndbno=01009&type=b&format=json&api_key=ylOCiNeHurqTR8p4AqpKQj2F1muB7x0F2yQeQbb9';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getReports(): Observable<string[]> {
    return this.http.get(this.apiUrl).pipe(
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
