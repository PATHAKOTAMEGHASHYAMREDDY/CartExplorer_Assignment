import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/CartService';

@Component({
  selector: "app-cart-list",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./CartList.component.html",
  styleUrls: ["./CartList.component.css"],
})
export class CartListComponent implements OnInit {
  carts: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCarts().subscribe({
      next: (data) => {
        this.carts = data.carts;
      },
      error: (error) => {
        console.error("Error fetching carts:", error);
      },
    });
  }
}
