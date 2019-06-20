import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpParams } from '@angular/common/http';

const API_KEY = '57eaeb51f69f419abdf9355c9244f440'; //environment.apiKey;
const API_URL = 'https://newsapi.org/v2'; //environment.apiUrl;

const params = new HttpParams().set('apiKey', API_KEY);

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getData(url) {
    console.log(API_URL);
    return this.http.get(`${API_URL}/${url}`, { params });
  }
}
