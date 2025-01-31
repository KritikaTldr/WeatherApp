import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RightContainerComponent } from "./right-container/right-container.component";
import { LeftContainerComponent } from "./left-container/left-container.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RightContainerComponent, LeftContainerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // ✅ Change from `styleUrl` to `styleUrls`
})
export class AppComponent {
  title = 'WeatherApp';
}
