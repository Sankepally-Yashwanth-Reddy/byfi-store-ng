import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [NgIf, CommonModule, RouterModule],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent {

  public routesArray = [
    {
      path: 'home',
      name: 'Home'
    },
    {
      path: 'mobiles',
      name: 'Mobiles'
    },
    {
      path: 'electronics',
      subRoutes: [
        {
          path: 'laptops',
          name: 'Laptops'
        },
        {
          path: 'e-tablets',
          name: 'Tablets/Pads'
        },
        {
          path: 'electronics-accessories',
          name: 'Electronic Accessories'
        }
      ]
    },
    {
      path: 'fashion',
      subRoutes: [
        {
          path: 'fashion/men',
          name: 'Men\'s Fashion'
        },
        {
          path: 'fashion/women',
          name: 'Women\'s Fashion'
        },
        {
          path: 'fasion/kids',
          name: 'Kids'
        }
      ]
    }
  ];



  constructor() { }


}
