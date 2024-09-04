import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private WeatherService: WeatherService) {

  }

  cityName: String = 'Dakar';
  WeatherData?: weatherData;

  ngOnInit(): void {



  }

  onSubmit() {
    this.getWeatherData(cityName)
  }

  private getWeatherData(cityName: string) {

    this.WeatherService.getWeatherData(cityName)
      .subscribe({
        next: (response) => {
          this.WeatherData = response
          console.log(response);
        }
      });

  }
}
