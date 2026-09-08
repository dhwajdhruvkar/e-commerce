# React E-Commerce Storefront

A frontend shopping demo built with React, Vite and Tailwind CSS. Browse products, filter by category, open product details and manage a shopping cart.

## Features

- Product catalog with images, prices and ratings.
- Category filtering and product detail routes.
- Cart interactions backed by React Context.
- Responsive layouts for desktop and mobile.

## Technology

React · JavaScript · React Router · Vite · Tailwind CSS

## Run locally

Use Node.js 22 and npm.

```sh
git clone https://github.com/dhwajdhruvkar/e-commerce.git
cd e-commerce
npm ci
npm run dev
```

Open the local URL printed by Vite in the terminal.

## Available checks and build commands

```sh
npm run lint
npm run build
npm run preview
```

These are the scripts available in `package.json`; the repository does not currently define an automated test command.

## Code guide

- `src/Components/ProductGrid.jsx`: product catalog.
- `src/Components/ProductDetailPage.jsx`: product details.
- `src/Components/CartPage.jsx`: shopping cart interface.
- `src/Context/AppContext.jsx`: shared application state.
- `src/Components/dummyProducts.jsx`: demo product data.
- `src/main.jsx`: application entry point.

## Scope

This repository demonstrates frontend shopping interactions with demo product data. It should be evaluated as a storefront demo; payment processing and real order fulfillment are outside its documented scope.
