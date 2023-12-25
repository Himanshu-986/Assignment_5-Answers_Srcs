import { Component } from '@angular/core';
import { SecondCompComponent } from '../second-comp/second-comp.component';

@Component({
  selector: 'app-firts-comp',
  standalone: true,
  imports: [SecondCompComponent],
  templateUrl: './firts-comp.component.html',
  styleUrl: './firts-comp.component.css'
})
export class FirtsCompComponent {

}
