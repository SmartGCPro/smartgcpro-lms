import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  url = environment.serverUrl;

  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get(this.url + '', {headers: this.headers});
  }

  getTestmonials() {
    return this.http.get(this.url + '', {headers: this.headers});
  }
}
