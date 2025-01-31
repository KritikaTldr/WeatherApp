import {Component} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {CommonModule} from "@angular/common";
import {faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import {faThumbsDown} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faFaceSmile} from "@fortawesome/free-solid-svg-icons";
import {faFaceFrown} from "@fortawesome/free-solid-svg-icons";
import {WeatherService} from "../Services/weather.service";


@Component({
    selector: 'app-right-container',
    standalone: true,
    imports: [
        NgClass,
        NgIf,
        FaIconComponent,
        NgForOf,
        CommonModule,
    ],
    templateUrl: './right-container.component.html',
    styleUrl: './right-container.component.css'
})
export class RightContainerComponent {

    faThumbsUp: any = faThumbsUp
    faThumbsDown: any = faThumbsDown

    faFaceSmile: any = faFaceSmile
    faFaceFrown: any = faFaceFrown

    constructor(public weatherService: WeatherService) {
    }


    onTodayClick() {
        this.weatherService.today = true;
        this.weatherService.week = false;
    }

    onWeekClick() {
        this.weatherService.today = false;
        this.weatherService.week = true;
    }

    onCelsiusClick() {
        this.weatherService.celsius = true;
        this.weatherService.fahrenheit = false;
    }

    onFahrenheitClick() {
        this.weatherService.celsius = false;
        this.weatherService.fahrenheit = true;
    }

    protected readonly Number = Number;
}
