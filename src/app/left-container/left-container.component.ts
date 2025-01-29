import { Component } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";


@Component({
  selector: 'app-left-container',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './left-container.component.html',
  styleUrl: './left-container.component.css'
})
export class LeftContainerComponent {
  faMagnifyingGlass: any = faMagnifyingGlass;
  faLocation: any = faLocation;
}
