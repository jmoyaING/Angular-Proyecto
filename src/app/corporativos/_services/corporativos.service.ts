import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment.dev';
import { Corporativos } from '../_models/corporativos';

@Injectable({
  providedIn: 'root'
})
export class CorporativosService {

   public apiURL =  environment.apiURL+'/corporativos'
   public auth_token = 'Bearer '+localStorage.getItem('tokenscloud');

   headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': this.auth_token,
  });

  constructor(private http: HttpClient) {
   }

  getCorporativos(): Observable<Corporativos> {
    return this.http.get<Corporativos>(this.apiURL, {headers : this.headers});
  }  


}
