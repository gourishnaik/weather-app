import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiEndpoint = 'http://api.weatherapi.com/v1/current.json';
  private apiEndpointKey = 'a7573367385448d5835165804240811';

  constructor(private http: HttpClient) {}

  getWeatherData(cityname: string): Observable<any> {
    return this.http.get(`${this.apiEndpoint}?key=${this.apiEndpointKey}&q=${cityname}`);
  }
}
