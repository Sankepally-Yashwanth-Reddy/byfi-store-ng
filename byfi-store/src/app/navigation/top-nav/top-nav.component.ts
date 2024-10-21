import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent {

  public routesArray = [
  ];

  constructor() { }


}
