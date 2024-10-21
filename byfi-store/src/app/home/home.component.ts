import { Component, OnInit } from '@angular/core';
import { TopNavComponent } from '../navigation/top-nav/top-nav.component';
import { ProductsService } from '../services/products/products.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopNavComponent, NgIf, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  products: any[] = [];  // Variable to hold the products

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();  // Call fetchProducts when component initializes
  }

  fetchProducts(): void {
    this.productsService.getProducts().subscribe(
      (data) => {
        this.products = data;  // Assign the data to the products array
        // console.log(this.products);  // Log the products to check
      },
      (error) => {
        console.error('Error fetching products:', error);  // Handle any errors
      }
    );
  }
}
