import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirtsCompComponent } from './firts-comp/firts-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FirtsCompComponent,SecondCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'marvellous';
}
