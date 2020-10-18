import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class CorporativosService {

  public apiURL = environment.apiURL;
  public auth_token = 'Barer '+localStorage.getItem('tokenscloud');

  constructor(private http: HttpClient) {

   }

   headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  listaCorporativos(): Observable<any> {
    return this.http
      .post<LoginUser>(
        this.apiLogin,
        { email, password },
        { headers: this.headers }
      )
      .pipe(map(success => success.success));
  }

}
