import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  cities: string[] = ['Bengaluru', 'Mumbai', 'Chennai', 'Panaji', 'Hyderabad', 'Munnar','Mysore'];
  selectedCity: string = 'Bengaluru';
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData();
  }

  getWeatherData() {
   this.weatherService.getWeatherData(this.selectedCity).subscribe((res=>{
    this.weatherData = res;
    console.log(this.weatherData)
   }))
}


  
}