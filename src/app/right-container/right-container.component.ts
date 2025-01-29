import { Component } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-right-container',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './right-container.component.html',
  styleUrl: './right-container.component.css'
})
export class RightContainerComponent {
  today = false;
  week = true;

  celsius = true;
  fahrenheit = false;

  onTodayClick(){
    this.today = true;
    this.week = false;
  }

  onWeekClick(){
    this.today = false;
    this.week = true;
  }

  onCelsiusClick(){
    this.celsius = true;
    this.fahrenheit = false;
  }

  onFahrenheitClick(){
    this.celsius = false;
    this.fahrenheit = true;
  }
}
