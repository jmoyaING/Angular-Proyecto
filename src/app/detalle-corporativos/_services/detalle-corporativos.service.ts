import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment.dev';
import { Corporativos, TwContratosCorporativo } from '../../corporativos/_models/corporativos';
@Injectable({
  providedIn: 'root'
})
export class DetalleCorporativosService {

  public apiURL =  environment.apiURL+'/corporativos';
  public apiContacto =  environment.apiURL+'/contactos'; 
  public auth_token = 'Bearer '+localStorage.getItem('tokenscloud');

  headers: HttpHeaders = new HttpHeaders({
   'Content-Type': 'application/json; charset=utf-8',
   'Authorization': this.auth_token,
 });


  constructor(private http: HttpClient) { }
  
  getCorporativo(id: string ): Observable<any> {
    const url = `${this.apiURL}/${id}` ;
    return this.http.get<Corporativos>(url , {headers : this.headers});
 }  

 updateCorporativo(id, data): Observable<any> {
  const url = `${this.apiURL}/${id}` ;
  return this.http.put(url , data, {headers : this.headers});
}

 createContacto(data): Observable<any> {
  return this.http.post(this.apiContacto , data, {headers : this.headers});
}

updateContacto(id, data): Observable<any> {
  const url = `${this.apiContacto}/${id}` ;
  return this.http.put(url , data, {headers : this.headers});
}

deleteContacto(id): Observable<any> {
  const url = `${this.apiContacto}/${id}` ;
  return this.http.delete(url , {headers : this.headers});
}


}
