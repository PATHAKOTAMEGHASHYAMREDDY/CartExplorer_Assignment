import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { DiscountPipe } from '../pipes/discount.pipe';

@Component({
  selector: 'app-cart-details',
  standalone: true,
  imports: [CommonModule, DiscountPipe],
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  cart: any = null;
  cartId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cartId = +params['id'];
      this.cartService.getCartById(this.cartId).subscribe({
        next: (data) => {
          this.cart = data;
        },
        error: (error) => {
          console.error('Error fetching cart details:', error);
        }
      });
    });
  }
}
