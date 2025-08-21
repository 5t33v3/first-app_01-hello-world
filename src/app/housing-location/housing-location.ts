import { Component,input} from '@angular/core';
import {HousingLocationInfo} from '../housinglocation';
import { RouterLink,RouterOutlet } from "@angular/router";
@Component({
selector: 'app-housing-location',
  
  template: `
    <section class = "listing">
      <a [routerLink]="['/details', housingLocation().id]">Learn More </a>
      <img 
        class = "listing-photo"
        [src] = "housingLocation().photo"
        alt = "Exterior photo of {{ housingLocation().name}}"
        crossorigin
        />
    <h2 class = "listing-heading">{{ housingLocation().name }}</h2>
    <p class ="listing-location">{{ housingLocation().city }}, {{housingLocation().state}} </p>
    </section>
  `,
  styleUrls: ['./housing-locations.css'],
  imports: [RouterLink],
})
export class HousingLocation {
housingLocation = input.required<HousingLocationInfo>();
}
