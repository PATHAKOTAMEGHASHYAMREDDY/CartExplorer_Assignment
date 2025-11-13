# Cart Explorer App

Angular application that displays shopping carts from DummyJSON API with routing, services, and custom pipes.

## Installation Commands

Run these commands in your terminal:

```bash
npm install
```

## Run the Application

```bash
npm start
```

Then open your browser to: http://localhost:4200

## Features

- **CartListComponent**: Displays list of carts with totals (currency pipe)
- **CartDetailsComponent**: Shows cart products with discount calculations
- **CartService**: Fetches data from https://dummyjson.com/carts
- **DiscountPipe**: Custom pipe to calculate amount after discount
- **Routing**: Navigate from cart list to cart details

## Routes

- `/carts` - Cart List page
- `/carts/:id` - Cart Details page (e.g., /carts/14)

## Project Structure

```
src/
├── app/
│   ├── cart-list/
│   │   ├── cart-list.component.ts
│   │   ├── cart-list.component.html
│   │   └── cart-list.component.css
│   ├── cart-details/
│   │   ├── cart-details.component.ts
│   │   ├── cart-details.component.html
│   │   └── cart-details.component.css
│   ├── services/
│   │   └── cart.service.ts
│   ├── pipes/
│   │   └── discount.pipe.ts
│   ├── app.component.ts
│   └── app.routes.ts
├── index.html
├── main.ts
└── styles.css
```
