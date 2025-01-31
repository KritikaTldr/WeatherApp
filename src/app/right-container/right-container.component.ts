import { Component } from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {faCloud} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
@Component({
  selector: 'app-right-container',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    FaIconComponent
  ],
  templateUrl: './right-container.component.html',
  styleUrl: './right-container.component.css'
})
export class RightContainerComponent {
  today = false;
  week = true;

  celsius = true;
  fahrenheit = false;

  constructor() { }


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

  protected readonly faCloud = faCloud;
}
