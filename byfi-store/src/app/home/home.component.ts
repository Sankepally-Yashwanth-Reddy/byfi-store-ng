import { Component } from '@angular/core';
import { TopNavComponent } from '../navigation/top-nav/top-nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopNavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
